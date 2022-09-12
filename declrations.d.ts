declare type ValueOf<T> = T[keyof T];

declare module '@env' {
  const API_URL: string;
}
