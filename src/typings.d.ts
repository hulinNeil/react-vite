type CSSModuleClasses = { readonly [key: string]: string }

declare module '*.svg';
declare module '*.png';

declare module '*.less' {
  const classes: CSSModuleClasses
  export default classes
}

class NotificationManager {
  static info(message?: string, title?: string | null, timeOut?: number | null, callback?: () => void | null): void;
  static error(message?: string, title?: string | null, timeOut?: number | null, callback?: () => void | null): void;
}

declare module 'react-notifications' {
  export { NotificationContainer, NotificationManager };
}

declare const REACT_APP_ENV: string;
declare const API_BASE_URL: string;
declare const GAME_URL: string;
declare const VERSION: string;
declare const REACT_APP_INFURA_PROJECT_ID: string;
declare const REACT_APP_FORTMATIC_PROJECT_ID: string;
declare const REACT_APP_COINGECKO_API_URL: string;
declare const REACT_APP_CONVERTER_ADDRESS: string;
declare const REACT_APP_CONVERTER_EXCHANGE: string;
declare const REACT_APP_MANA_ADDRESS: string;
declare const REACT_APP_MARKETPLACE_API_URL: string;
declare const REACT_APP_VIRTUAL_API_URL: string;
declare const REACT_APP_NETWORK: string;
declare const REACT_APP_SNAPSHOT_API_URL: string;
declare const REACT_APP_SNAPSHOT_GRAPHQL_URL: string;
