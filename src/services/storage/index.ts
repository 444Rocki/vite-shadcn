export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}`;
};

export const getCookie = (key: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
};