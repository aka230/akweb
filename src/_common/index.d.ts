/** 公共肉联参数 */
export interface IWrapProps {
  /** 距离顶部距离 */
  marginTop?: string;
  /** 距离左侧距离 */
  marginLeft?: string;
  /** 非特殊情况不要使用 */
  marginRight?: string;
  /** 非特殊情况不要使用 */
  marginBottom?: string;
  /** 内边距 */
  padding?: string;
  /** 背景色 */
  backgroundColor?: string;
  /** 宽度 */
  width?: string;
  /** 高度 */
  height?: string;
  /** 最小高度 */
  minHeight?: string;
  /** 最大高度 */
  maxHeight?: string;
  /** 最小宽度 */
  minWidth?: string;
  /** 最大宽度 */
  maxWidth?: string;
  /** 边框 */
  border?: string;
  /** 圆角 */
  borderRadius?: string;
  className?: string;
  style?: Rax.CSSProperties;
  flex?: string;
}
