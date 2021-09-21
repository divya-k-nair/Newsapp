import logo from './logo.svg';
import './App.css';
import News from './Components/GetNews';
import GetNews from './Components/GetNews';
import GetNews2 from './Components/GetNews2';
import GetNews3 from './Components/GetNews3';
import GetNews4 from './Components/GetNews4';
import Header from './Components/Header';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Route path="/" exact component={GetNews}/>
      <Route path="/News2" exact component={GetNews2}/>
      <Route path="/News3" exact component={GetNews3}/>
      <Route path="/News4" exact component={GetNews4}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
