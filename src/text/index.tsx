import { createElement, useState, useMemo, createRef, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import classnames from 'classnames';
import css from '../_util/css';
import { isNode } from '../_util/raxValid';
import { IWrapProps } from 'src/_common/index.d';
import { TFontSize, TFontTheme } from '../_common/themes';
import './index.module.scss';

interface ITextProps extends IWrapProps {
  size?: TFontSize;
  theme?: TFontTheme;
  /** 删除线 */
  lineThrough?: boolean;
  /** 链接跳转 */
  link?: string;
  /** 超过自动省略 */
  ellipsis?: boolean;
  /** 超过自动省略行数 */
  lineClamp?: number;
  leftSlot?: Rax.RaxNode;
  rightSlot?: Rax.RaxNode;
  /** 下划线插槽 */
  underlineSlot?: boolean;
  align?: 'left' | 'center' | 'right';
  children?: Rax.RaxNode;
  onClick?: () => void;
}

function AText(props: ITextProps) {
  const {
    size = '12',
    theme,
    lineThrough,
    link,
    ellipsis,
    lineClamp,
    leftSlot,
    rightSlot,
    underlineSlot,
    align,
    onClick,
    className,
    flex,
    children,
  } = props;
  /** 前插槽宽度 */
  const [leftSlotWidth, setLeftSlotWidth] = useState(0);
  /** 前插槽高度 */
  // const [leftSlotHeight, setLeftSlotHeight] = useState(0);
  const leftSlotRef = createRef<any>();
  const aTextEleREf = createRef();

  useEffect(() => {
    if (leftSlot) {
      setLeftSlotWidth(leftSlotRef?.current?.clientWidth || 0);
    }
  }, []);

  const classNames = useMemo(() => {
    return classnames([
      'a-text',
      `a-text-${size}`,
      theme && `a-text-${theme}`,
      lineThrough && 'a-text-line-through',
      link && 'a-text-link',
      ellipsis && 'a-text-ellipsis',
      rightSlot && 'a-text-suffix',
      align && `a-text-${align}`,
      className,
    ]);
  }, [size, theme, lineThrough, link, ellipsis, rightSlot, align, className]);

  const wrapperClassNames = useMemo(() => {
    return classnames([
      leftSlot && 'a-text-relative',
      flex === '1' && 'a-text-block',
      underlineSlot && 'a-text-wrapper',
      leftSlot && !leftSlotWidth && 'a-text-display',
    ]);
  }, [leftSlot, flex, underlineSlot, leftSlotWidth]);

  const styles = useMemo(() => {
    return css(props, [
      { key: 'textIndent', value: `${leftSlotWidth + 6}rpx`, validator: () => !!leftSlot },
    ]);
  }, [props, leftSlotWidth, leftSlot]);

  const renderUnderlineSlot = () => {
    return !!underlineSlot && <View className="a-text-background-color">{underlineSlot}</View>;
  };

  const renderLeftSlot = () => {
    return !!leftSlot && <View ref={leftSlotRef} className="a-text-absoulte">{leftSlot}</View>;
  };

  const renderRightSlot = () => {
    return <View style={{ marginLeft: '4rpx' }}>{rightSlot}</View>;
  };

  const renderText = (onlyText?: boolean) => {
    const initText = () => {
      return (
        <Text
          ref={aTextEleREf}
          className={`${(onlyText && className) ? `${className}` : ''}${classNames}`}
          style={onlyText ? {} : styles}
          numberOfLines={lineClamp}
          ellipsis={ellipsis || lineClamp > 1}
          onClick={onClick}
        >
          {children}
        </Text>
      );
    };
    if (isNode(rightSlot)) {
      return (
        <View style={{ flexDirection: 'row' }}>
          {initText()}
          {renderRightSlot()}
        </View>
      );
    } else {
      return initText();
    }
  };

  return !leftSlot && !underlineSlot ? renderText() : (
    <View className={wrapperClassNames} style={styles} onClick={onClick}>
      {/* 前缀 */}
      {!!leftSlot && renderLeftSlot()}
      {!!underlineSlot && renderUnderlineSlot()}
      {renderText()}
    </View>
  );
}

export default AText;

