const isDevMode = (import.meta as ImportMeta & { env?: { DEV?: boolean } }).env
  ?.DEV;

export { isDevMode };
