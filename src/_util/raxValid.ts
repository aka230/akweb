import isValidElement from 'rax-is-valid-element';

export const isNode = (element) => element && isValidElement(element);
