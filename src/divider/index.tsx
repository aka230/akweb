import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import classnames from 'classnames';
import './index.scss';

interface IDividerProps {
  /** 是否虚线 */
  dashed?: boolean;
  space?: string;
  className?: string;
  style?: Rax.CSSProperties;
}
function Divider(props: IDividerProps) {
  const { dashed, space, className, style } = props;

  const classNames = useMemo(() => {
    return classnames([
      'a-divider-horizontal',
      dashed && 'a-divider-dashed',
      className,
    ]);
  }, [dashed, className]);

  const styles = useMemo(() => {
    const tmpStyle = { ...style };
    if (space) {
      tmpStyle.marginTop = `${space}rpx`;
      tmpStyle.marginBottom = `${space}rpx`;
    }
    return tmpStyle;
  }, [space, style]);

  return (
    <View className={classNames} style={styles} />
  );
}

export default Divider;
