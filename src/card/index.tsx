import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import { IWrapProps } from '../_common/index.d';
import css from '../_util/css';
import classnames from 'classnames';
import { TCardTheme } from '../_common/themes';
import './style/index.scss';

interface ICard extends IWrapProps {
  theme?: TCardTheme;
  shadow?: boolean;
  children?: Rax.RaxElement | Rax.RaxNode;
}

function Card(props: ICard) {
  const { theme, shadow, className, children } = props;
  const classNames = useMemo(() => {
    return classnames([
      'a-layout-card',
      theme && `a-layout-card-${theme}`,
      shadow && 'a-layout-shadow',
      className,
    ]);
  }, [theme, shadow, className]);

  const styles = useMemo(() => {
    return css(props);
  }, [props]);

  return (
    <View className={classNames} style={styles}>
      {children}
    </View>
  );
}

export default Card;
