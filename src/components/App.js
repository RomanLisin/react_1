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
        content='The factorial of a number n is the product of all natural numbers from 1 to 100.'
        functionType="factorial"
        showCalculation = {true}
        
        />
       <Article 
       title='Calculation a Power' 
       content='This function calculates the power of a number.'
       functionType="power"
       showCalculation = {true}
       />
       <Article
       title="Numbers conversion"
      content="Converting numbers from decimal system to binary and hexadecimal and conversion of numbers from decimal to binary and hexadecimal and from binary and hexadecimal to decimal"
      functionType="numberSystem"
      showCalculation = {true}
      />
      <Footer />
    </div>
  );
}

export default App;
