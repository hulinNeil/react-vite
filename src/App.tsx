import { useState } from 'react';
import '@/App.less';
import styles from './test.less';
import { ReactComponent as Loading } from '@/logo.svg';

console.log(process.env.NODE_ENV);
console.log(API_BASE_URL, GAME_URL);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: 20 }}>
          <Loading />
        </div>

        <p className={styles.aa}>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
