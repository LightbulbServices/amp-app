import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from Lightbulb Web Services!
        </p>
        <a
          className="App-link"
          href="https://thehotline.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit TheHotline.org
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
