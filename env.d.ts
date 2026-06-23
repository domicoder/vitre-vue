/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_DEFAULT_LOCALE: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
