import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import classnames from 'classnames';
import './style/index.scss';

export interface IPageProps {
  className?: string;
  style?: Rax.CSSProperties;
  bodyStyle?: Rax.CSSProperties;
  footer?: Rax.RaxElement | Rax.RaxNode;
  footerClassName?: string;
  footerStyle?: Rax.CSSProperties;
  children?: Rax.RaxElement | Rax.RaxNode;
}

function Page(props: IPageProps) {
  const { footer, children, className, style, footerClassName, footerStyle, bodyStyle } = props;

  const classNames = useMemo(() => {
    return classnames([
      'page',
      className,
    ]);
  }, [className]);

  const styles = useMemo(() => {
    return style && {
      ...style,
    };
  }, [style]);

  const footerClassNames = useMemo(() => {
    return classnames([
      'page-footer',
      footerClassName,
    ]);
  }, [footerClassName]);

  const footerStyles = useMemo(() => {
    return footerStyle && {
      ...footerStyle,
    };
  }, [footerStyle]);

  const footerRender = () => {
    return footer ? (
      <View className={footerClassNames} style={footerStyles}>
        {footer}
      </View>
    ) : null;
  };

  return (
    <View className={classNames} style={styles}>
      <View className="page-body" style={bodyStyle}>{children}</View>
      {footerRender()}
    </View>
  );
}

export default Page;
