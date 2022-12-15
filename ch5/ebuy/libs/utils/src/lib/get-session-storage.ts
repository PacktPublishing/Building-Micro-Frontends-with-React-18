export function getSessionStorage(key: any) {
  const sessionStoragevalue = JSON.parse(
    window.sessionStorage.getItem(key) || '{}'
  );
  return sessionStoragevalue;
}
export default getSessionStorage;
