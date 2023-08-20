interface ICssOptions {
  key: string;
  value: any;
  validator?: (value: any) => boolean;
}

const commonCssKeys = [
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'padding',
  'backgroundColor',
  'width',
  'height',
  'minHeight',
  'maxHeight',
  'minWidth',
  'maxWidth',
  'border',
  'borderRadius',
  'flex',
];

export default (props, items: ICssOptions[] = []) => {
  const style = props?.style || {};
  const tmpStyle: any = {
    ...style,
  };
  // 遍历公共样式
  for (const key of commonCssKeys) {
    if (props[key]) {
      tmpStyle[key] = props[key];
    }
  }

  for (const item of items) {
    if (item.validator && !item.validator(item.value)) {
      continue;
    } else if (item.value) {
      tmpStyle[item.key] = item.value;
    }
  }
  return tmpStyle;
};
