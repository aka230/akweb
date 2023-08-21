import { createElement, useState, forwardRef, useImperativeHandle, useMemo } from 'rax';
import Modal from 'rax-modal';

interface IProps {
  maskCanBeClick?: boolean;
  children: Rax.RaxElement;
  placement?: 'bottom';
}

export default forwardRef((props: IProps, ref) => {
  const { children, maskCanBeClick, placement } = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  const contentStyle: Object = useMemo(() => {
    if (placement === 'bottom') {
      return {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        borderRadius: '26rpx 26rpx 0 0',
        padding: '26rpx',
      };
    } else {
      return {
        width: '570rpx',
        borderRadius: '26rpx',
        padding: '26rpx',
      };
    }
  }, [placement]);

  return (
    <Modal
      visible={visible}
      maskCanBeClick={maskCanBeClick}
      delay={0}
      animation={[300, 300]}
      duration={[300, 300]}
      onMaskClick={() => setVisible(false)}
      onMaskClose={() => setVisible(false)}
      contentStyle={contentStyle}
    >
      {children}
    </Modal>
  );
});

