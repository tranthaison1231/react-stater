const STORAGE_KEY: string = 'session-token';

export function getToken(): string {
  const token = localStorage.getItem(STORAGE_KEY);
  return token ?? '';
}

export function setToken(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

export function deleteToken(): void {
  localStorage.removeItem(STORAGE_KEY);
}
