import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import classnames from 'classnames';
import css from '../_util/css';
import { IWrapProps } from '../_common/index.d';

import './style/index.scss';

export enum FlexDirection {
  'row' = 'row',
  'row-reverse' = 'row-reverse',
  'column' = 'column',
  'column-reverse' = 'column-reverse',
}

export enum FlexJustifyContent {
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'space-between' = 'space-between',
  'space-around' = 'space-around',
}

export enum FlexAlignItems {
  'flex-start' = 'flex-start',
  'flex-end' = 'flex-end',
  'center' = 'center',
  'baseline' = 'baseline',
  'stretch' = 'stretch',
}

export enum FlexWrap {
  nowrap = 'nowrap',
  wrap = 'wrap',
  /** 换行，第一行在正文 */
  'wrap-reverse' = 'wrap-reverse',
}

export interface IFlex extends IWrapProps {
  id?: string;
  /** 方向 */
  direction?: FlexDirection | string;
  /** 横轴对齐方式 */
  justifyContent?: FlexJustifyContent | string;
  /** 纵轴对齐方式 */
  alignItems?: FlexAlignItems | string;
  flex?: '1';
  /** 设置换行方式 */
  wrap?: FlexWrap | string;
  className?: string;
  style?: Rax.CSSProperties;
  onClick?: () => void;
  children?: Rax.RaxNode;
}

function Flex(props: IFlex) {
  const { direction = 'row', justifyContent, alignItems, flex, wrap, className, children } = props;

  const classNames = useMemo(() => {
    return classnames([
      direction && `flex-${direction}`,
      flex === '1' && 'flex-1',
      className,
    ]);
  }, [className, direction, flex]);

  const styles = useMemo(() => {
    return css(props, [
      { key: 'height', value: '100%', validator: () => flex === '1' },
      { key: 'justifyContent', value: justifyContent },
      { key: 'alignItems', value: alignItems },
      { key: 'flexWrap', value: wrap },
    ]);
  }, [flex, justifyContent, alignItems, wrap, props]);

  return (
    <View {...props} className={classNames} style={styles}>{children}</View>
  );
}

export default Flex;
