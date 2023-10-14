import logo from './logo.svg';
import './App.css';
import Hanuma from './component3/Hanuma';
import Header from './components/sign-in/Header';
import SignIn from './components/sign-in/SignIn';
import GetButtonValue from './GetButtonValue';
// import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Hanuma /> */}
      <SignIn />
      <GetButtonValue />
    </div>
  );
}

export default App;
