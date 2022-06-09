const REACT_APP_ENV = process.env.REACT_APP_ENV || 'dev';

const API_BASE_URL = {
  // dev: 'http://192.168.1.133:8080/metaspace/web' /* 'http://192.168.1.133:8080/metaspace/web'*/,
  dev: 'http://metaspaceapi.spacey2025.com/metaspace/web' /* 'http://192.168.1.133:8080/metaspace/web'*/,
  staging: 'http://metaspaceapi.spacey2025.com/metaspace/web',
  production: 'http://metaspaceapi.spacey2025.com/metaspace/web',
}[REACT_APP_ENV];

const GAME_URL = {
  dev: 'https://testgame.spacey2025.com/',
  staging: 'https://testgame.spacey2025.com/',
  production: 'https://game.spacey2025.com/',
}[REACT_APP_ENV];

module.exports = {
  REACT_APP_ENV,
  API_BASE_URL,
  GAME_URL,
  VERSION: '0.0.1',
  REACT_APP_INFURA_PROJECT_ID: '666',
};
