import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';

import historyBooks from './data/history.json';
import horrorBooks from "./data/horror.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <BookList horrorB = {horrorBooks}/>
      <MyFooter />
    </div>
  );
}

export default App;
