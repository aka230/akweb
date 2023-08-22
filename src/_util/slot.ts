const slotKeys = [
  'leftSlot',
  'rightSlot',
  'topSlot',
  'bottomSlot',
  'centerSlot',
  'topLeftSlot',
  'topRightSlot',
  'bottomLeftSlot',
  'bottomRightSlot',
  'leftTopSlot',
  'leftBottomSlot',
  'rightTopSlot',
  'rightBottomSlot',
];
export const getPlacementSlots = (props: any): {className: string; slot: Rax.RaxNode}[] => {
  const list: any[] = [];
  for (const key of slotKeys) {
    if (props[key]) {
      list.push({
        className: `a-placement-${key.toLowerCase().replace('slot', '')}`,
        slot: props[key],
      });
    }
  }
  return list;
};
