// import logo from '../logo.svg';
import './App.css';
import Header  from './Header';
import Article from './Article';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Article
       title='Calculating a Factorial'
        content='The factorial of a number n is the product of all natural numbers from 1 to n.'
        functionType="factorial"
        showCalculation = {true}
        
        />
       <Article 
       title='Raising to a Power' 
       content='This function calculates the base raised to the specified power.'
       functionType="power"
       showCalculation = {true}
       />
       <Article
       title="Number System Conversion"
      content="Converting numbers between different number systems (from 2 to 36)."
      functionType="numberSystem"
      showCalculation = {true}
      />
      <Footer />
    </div>
  );
}

export default App;
