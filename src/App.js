import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import fantasy from "./data/fantasy.json"
import history from "./data/history.json"


import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
    <>
      {/* <SingleBook genere= {fantasy} num= {0}/> */}
      <BookList array= {history}/>
    </>
  );
}

export default App;
