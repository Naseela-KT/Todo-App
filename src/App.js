import './App.css';
import Button from './components/Button';

function App() {
return (<div className="App">
  <input type="text" placeholder="Enter Your Name"></input>
  <Button BtnName="Click Here"/>
  <Button BtnName="Sign in"/>
  <Button BtnName="Login"/>
  <Button BtnName="Logout"/>
</div>);
}
export default App;
