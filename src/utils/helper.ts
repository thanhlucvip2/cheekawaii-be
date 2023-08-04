import { forEach } from 'lodash';

import { FAILED, MAIL_SPAM } from './constants';

export const handleMakeKey = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const checkEmailSpam = (email: string) => {
  let count = 0;
  forEach(MAIL_SPAM, (value) => {
    count = email.indexOf(value) === FAILED ? count : count + 1;
  });
  return count;
};

export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const convertVNStringToKeyString = (inputText: string): string => {
  const mapAccents = {
    à: 'a',
    á: 'a',
    ả: 'a',
    ã: 'a',
    ạ: 'a',
    ầ: 'a',
    ấ: 'a',
    ẩ: 'a',
    ẫ: 'a',
    ậ: 'a',
    è: 'e',
    é: 'e',
    ẻ: 'e',
    ẽ: 'e',
    ẹ: 'e',
    ề: 'e',
    ế: 'e',
    ể: 'e',
    ễ: 'e',
    ệ: 'e',
    ì: 'i',
    í: 'i',
    ỉ: 'i',
    ĩ: 'i',
    ị: 'i',
    ò: 'o',
    ó: 'o',
    ỏ: 'o',
    õ: 'o',
    ọ: 'o',
    ồ: 'o',
    ố: 'o',
    ổ: 'o',
    ỗ: 'o',
    ộ: 'o',
    ù: 'u',
    ú: 'u',
    ủ: 'u',
    ũ: 'u',
    ụ: 'u',
    ừ: 'u',
    ứ: 'u',
    ử: 'u',
    ữ: 'u',
    ự: 'u',
    ỳ: 'y',
    ý: 'y',
    ỷ: 'y',
    ỹ: 'y',
    ỵ: 'y',
    đ: 'd',
    ă: 'a',
    â: 'a',
    ô: 'o',
    ơ: 'o',
    ê: 'e',
    ư: 'u',
  };
  const regex = /[^\w\s]/gi;
  return inputText
    .toLocaleLowerCase()
    .split('')
    .map((char) => mapAccents[char] || char)
    .join('')
    .replace(/\s+/g, '_')
    .replace(regex, '');
};
