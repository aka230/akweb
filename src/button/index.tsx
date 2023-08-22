import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import { isNode } from '../_util/raxValid';
import css from '../_util/css';
import classnames from 'classnames';
import { IWrapProps } from '../_common';
import { TButtonTheme, TFontSize } from '../_common/themes';
import { getPlacementSlots } from '../_util/slot';
// import Flex from '../flex';
import Text from '../text';
import './index.scss';

interface IButtonProps extends IWrapProps {
  size?: 'default' | 'small' | 'middle';
  textSize?: TFontSize;
  theme?: TButtonTheme;
  disabled?: boolean;
  children?: Rax.RaxNode;
  onClick?: (e: Event) => void;
}

function Button(props: IButtonProps) {
  const {
    size = 'default',
    theme = 'default',
    disabled = false,
    textSize,
    className,
    children,
    flex = '1',
    width,
    onClick,
  } = props;

  const isFlex1 = flex === '1';

  const childrenIsNode = useMemo(() => {
    return isNode(children);
  }, [children]);

  const classNames = useMemo(() => {
    return classnames([
      'a-button',
      `a-button-${size}`,
      isFlex1 && 'a-button-block',
      disabled && 'a-button-disabled',
      `a-button-bg-${theme}`,
      className,
    ]);
  }, [size, isFlex1, disabled, theme, className]);

  const styles = useMemo(() => {
    return css(props, [
      { key: 'flex', value: 'initial', validator: () => width !== undefined && width !== null && !flex },
      { key: 'width', value: width || isFlex1 ? `${width}rpx` : 'max-content' },
    ]);
  }, [props, width, isFlex1, flex]);

  const renderSlotPlacement = useMemo(() => {
    const slots = getPlacementSlots(props);
    return slots.map((slot, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <View key={`${index}_slot`} className={classnames(['a-placement-slot', slot.className])}>{slot.slot}</View>;
    });
  }, [props]);

  const renderText = () => {
    const textClassNames = classnames([
      `a-button-${theme || size}`,
      theme !== 'default' && theme !== 'checked' && 'a-button-text-bold',
    ]);
    const textItem = <Text className={textClassNames} size={textSize}>{children}</Text>;
    return textItem;
  };

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return (
    <View onClick={(onClick && !disabled) ? (e) => handleClick(e) : null} className={classNames} style={styles}>
      {childrenIsNode ? <View className={`a-button-custom a-button-custom-${theme}`}>{children}</View> : renderText()}
      {renderSlotPlacement}
    </View>
  );
}

export default Button;
