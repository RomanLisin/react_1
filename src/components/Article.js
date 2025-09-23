import { useState } from 'react';
import './Article.css';


function Article(props)
{
  // const {title, content} = props;
  const {title, content, functionType, functionParams, showCalculation = true} = props;
  const [result, setResult] = useState(null);
  const [inputValues, setInputValues] = useState({});

  //factorial
  const calculateFactorial = (n) => {
    if(n<0) return '???';
    if(n===0 || n===1) return 1;
    let factorial = 1;
    for(let i=2; i<=n; i++){
      factorial*=i;
    }
    return factorial;
  };

  //power
  const calculatePower = (base, exponent) => {
      return base ** exponent;
  };

  //systemnumbers
  const convertNumberSystem = (number, fromBase, toBase) => {
      return number * fromBase * toBase;
  };

  const handleCalculate = () => {
    if(!functionType) return;

    let calculationResult;
    
    switch (functionType){
      case 'factorial':
        const n = parseInt(inputValues.param1 || 0);
        calculationResult = calculateFactorial(n);
        break;
      
      case 'power':
        const base = parseFloat(inputValues.param1 || 0);
        const exponent = parseFloat(inputValues.param2 || 0);
        calculationResult = calculatePower(base, exponent);
        break;

      case 'numberSystem':
        const number = inputValues.param1 || '0';
        const fromBase =parseInt(inputValues.param2 || 0);
        const toBase = parseInt(inputValues.param3 || 0);
        calculationResult = convertNumberSystem(number, fromBase, toBase);
        break;
      
      default:
        calculationResult = 'Unknown function'
    }

    setResult(calculationResult);
  };

  // обработчик изменений input
  const handleInputChange = (paramName, value) => {
    setInputValues(prev => ({
      ...prev,
      [paramName]:value
    }));
  };

// рендеринг полей в зависимости от типа функций
const renderInputFields = () => {
      switch (functionType){
        case 'factorial':
          return(
            <div className='input-group'>
              <label>Number for factorial</label>
              <input 
              type="number" 
              min="0"
              max="100"
              value={inputValues.param1 || ''}
              onChange={(e)=> handleInputChange('param1', e.target.value)}
              placeholder='Input number'
              />
            </div>
          );
          break;
        case 'power':
            <>
            <div className='input-group'>
              <label>Base number:</label>
              <input 
              type="number" 
              value={inputValues.param1 || ''}
              onChange={(e)=> handleInputChange('param1', e.target.value)}
              placeholder='Input base number'
              />
            </div>
            <div className='input-group'>
              <label>Exponent number:</label>
              <input 
              type="number" 
              value={inputValues.param2 || ''}
              onChange={(e)=> handleInputChange('param2', e.target.value)}
              placeholder='Input exponent number'
              />
            </div>

            </>
          
          break;
          case 'numberSytem':
          <>
          <div className='input-group'>
            <label>Number:</label>
            <input 
            type="number" 
            value={inputValues.param1 || ''}
            onChange={(e)=> handleInputChange('param1', e.target.value)}
            placeholder='Input base number'
            />
          </div>
          <div className='input-group'>
            <label>From number system:</label>
            <input 
            type="number" 
            min="2"
            max="36"
            value={inputValues.param2 || ''}
            onChange={(e)=> handleInputChange('param2', e.target.value)}
            placeholder='Input exponent number'
            />
          </div>
          
          <div className='input-group'>
            <label>To numer system:</label>
            <input 
            type="number" 
            min="2"
            max="36"
            value={inputValues.param3 || ''}
            onChange={(e)=> handleInputChange('param3', e.target.value)}
            placeholder='Input exponent number'
            />
          </div>
    
          </>
          
          break;
          default:
            return null;
          }
        };
        
        return(
 <article>
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    )
}

export default Article;