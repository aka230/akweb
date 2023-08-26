import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import { isNode } from '../_util/raxValid';
import css from '../_util/css';
import classnames from 'classnames';
import { IWrapProps } from '../_common';
import { TTagTheme, TFontSize } from '../_common/themes';
// import { getPlacementSlots } from '../_util/slot';
// import Flex from '../flex';
import Text from '../text';
import './style/index.scss';

interface ITagProps extends IWrapProps {
  textSize?: TFontSize;
  theme?: TTagTheme;
  textColor?: string;
  children?: Rax.RaxNode;
  onClick?: (e: Event) => void;
}

function Tag(props: ITagProps) {
  const {
    theme = 'default',
    textColor,
    textSize,
    className,
    children,
    flex,
    width,
    onClick,
  } = props;

  const isFlex1 = flex === '1';
  const childrenIsNode = useMemo(() => {
    return isNode(children);
  }, [children]);

  const currentTheme = useMemo(() => {
    return theme || 'default';
  }, [theme]);

  const classNames = useMemo(() => {
    return classnames([
      'a-tag',
      isFlex1 && 'a-tag-block',
      `a-tag-bg-${currentTheme.toLowerCase()}`,
      childrenIsNode && `a-tag-custom a-tag-custom-${currentTheme}`,
      className,
    ]);
  }, [currentTheme, isFlex1, childrenIsNode, className]);

  const styles = useMemo(() => {
    return css(props, [
      { key: 'flex', value: 'initial', validator: () => width !== undefined && width !== null && !flex },
      { key: 'width', value: width || isFlex1 ? `${width}rpx` : 'max-content' },
      { key: 'borderRadius', value: isFlex1 ? '0' : '8rpx' },
    ]);
  }, [props, width, isFlex1, flex]);

  const renderText = () => {
    const textStyles = {};
    if (textColor) {
      textStyles['color'] = textColor;
    }
    const textItem = <Text className={`a-tag-text-${currentTheme}`} style={textStyles} size={textSize}>{children}</Text>;
    return textItem;
  };

  return (
    <View className={classNames} style={styles} onClick={onClick}>
      {childrenIsNode ? children : renderText()}
    </View>
  );
}

export default Tag;
