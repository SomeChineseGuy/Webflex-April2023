import logo from './logo.svg';
import './App.css';
import DocumentTitle from './components/DocumentTitle';
import GetData from './components/GetData';

function App() {
  return (
    <div className="App">
      <h1> Welcome to my app!</h1>
      {/* <DocumentTitle /> */}
      <GetData />
    </div>
  );
}

export default App;
