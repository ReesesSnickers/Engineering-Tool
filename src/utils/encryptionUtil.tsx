import base64 from 'base-64';
import utf8 from 'utf8';

export const decodeBase64 = (encodedValue: string) => {
  const bytes = base64.decode(encodedValue);
  const text = utf8.decode(bytes);
  return text;
};

export const encodeBase64 = (textValue: string) => {
  const bytes = utf8.encode(textValue);
  const encodedValue = base64.encode(bytes);
  return encodedValue;
};
