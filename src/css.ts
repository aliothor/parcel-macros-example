import type { MacroContext } from '@parcel/macros';
import { md5 } from 'js-md5';

export async function css(this: MacroContext | null, code: string) {
  let className = md5(code);
  code = `.${className} { ${code} }`;

  this?.addAsset({
    type: 'css',
    content: code
  });

  return className;
}