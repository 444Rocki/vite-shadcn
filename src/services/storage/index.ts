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
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
};

export const getCookie = (key: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    
  if (!cookie) return undefined;

  const value = cookie?.substring(key.length + 1);

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};