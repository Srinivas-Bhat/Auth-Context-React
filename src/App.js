
import { useContext } from 'react';
import './App.css';
import Input from './Components/Input';
import Navbar from './Components/Navbar';
import { AuthContext } from './Context/AuthContext';


function App() {

  const { isAuth, setIsAuth} = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar/>
      {isAuth ? null : <Input/>}
    </div>
  );
}

export default App;
