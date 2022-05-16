import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <img
          width="320"
          className="mx-auto"
          src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png"
          alt="Star Wars Logo"
        />
      <Pagination />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
