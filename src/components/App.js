import logo from '../logo.svg';
import './App.css';
import Header  from './Header';
import Article from './Article';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Article title='Процедурное прогрммирование на языке С++' content='Изучаем базовые конструкции языка'/>
       <Article title='ООП на С++' content='Изучаем Объектно-ориентированное програмирование на С++'/>
      <Footer />
    </div>
  );
}

export default App;
