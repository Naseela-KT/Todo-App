import './App.css';

function App() {
  const jsxElement = <h1>I am a JSX element</h1>
  const welcome = <h1>Welcome to  React Workshop</h1>
  const data = <small>By Skill Safari</small>
  return (
  <div className="App">
    {jsxElement}
    {welcome}
    {data}
  </div>
  );
}

export default App;
