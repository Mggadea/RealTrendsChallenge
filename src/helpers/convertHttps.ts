export const convertToHttps = (url)=> {
  if (url.startsWith('http://')) {
    return 'https://' + url.slice(7);
  }
  return url;
};

export default convertToHttps 
