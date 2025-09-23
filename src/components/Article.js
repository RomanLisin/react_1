import { useState } from 'react';
import './Article.css';


function Article(props)
{
  // const {title, content} = props;
  const {title, content, functionType, showCalculation = true} = props;
  const [result, setResult] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [conversionType, setConversionType] = useState('decToBin'); // по умолчанию decToBin

  //factorial
  const calculateFactorial = (n) => {
    if(n<0) return '???';
    if(n === 0 || n === 1) return 1;
    let factorial = 1;
    for(let i=2; i<=n; i++){
      factorial*=i;
    }
    return factorial;
  };

  //power
  const calculatePower = (base, exponent) => {
      //return base ** exponent;
      return Math.pow(base, exponent);
  };

  //systemnumbers
  // const convertNumberSystem = (number, fromBase, toBase) => {
  //   try{
  //   const decimal = parseInt(number, fromBase);

  //   if (isNaN(decimal)) {
  //     return 'Error number'
  //   }
  //   return decimal.toString(toBase).toUpperCase();
  // }catch (error) {
  //   return 'Error conversation'
  // }
  // };
const convertDecimalToBinary = (decimalNumber) => {
    try {
        const number = parseInt(decimalNumber);
        
        if (isNaN(number)) {
            return 'Error: Please enter a valid number.';
        }
        
        if (number < 0) {
            return 'Error: Please enter a non-negative number.';
        }
        
        return number.toString(2);
        
    } catch (error) {
        return 'Error conver';
    }
};
const convertDecimalToHexadecimal = (decimalNumber) => {
    try {
        const number = parseInt(decimalNumber);
        
        if (isNaN(number)) {
            return 'Error: Please enter a valid number.';
        }
        
        if (number < 0) {
            return 'Error: Please enter a non-negative number.';
        }
        
        return number.toString(16).toUpperCase();
        
    } catch (error) {
        return 'Error conversion';
    }
};
const convertBinaryToDecimal = (binaryNumber) => {
    try {
      // проверяем, что строка содержит только 0 и 1
      if (!/^[01]+$/.test(binaryNumber)) {
        return 'Error: Please enter a valid binary number (0 and 1 only)';
      }
      return parseInt(binaryNumber, 2);
    } catch (error) {
      return 'Error conversion';
    }
  };

  const convertHexadecimalToDecimal = (hexNumber) => {
    try {
      // проверяем, что строка содержит допустимые hex-символы
      if (!/^[0-9A-Fa-f]+$/.test(hexNumber)) {
        return 'Error: Please enter a valid hexadecimal number.';
      }
      return parseInt(hexNumber, 16);
    } catch (error) {
      return 'Error conversion';
    }
  };

  const handleCalculate = () => {
    if(!functionType || typeof functionType !== 'string'){
    setResult('Function undefined');
      return;
    }

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
        switch (conversionType) {

          case 'decToBin':
            calculationResult = convertDecimalToBinary(inputValues.param1 || '0');
            break;
          case 'decToHex':
             calculationResult = convertDecimalToHexadecimal(inputValues.number || '0');
            break;
          case 'binToDec':
            calculationResult = convertBinaryToDecimal(inputValues.number || '0');
            break;
          case 'hexToDec':
            calculationResult = convertHexadecimalToDecimal(inputValues.number || '0');
            break;
          default:
            calculationResult = "Choose type of conversion"
        }
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

  const handleConversionTypeChange = (type) => {
    setConversionType(type);
    setInputValues(prev => ({ ...prev, number: '' }));
    setResult(null);
  };

// рендеринг полей в зависимости от типа функций
const renderInputFields = () => {
  if (!functionType) return null;
  
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
        case 'power':
          return(
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
            );
          case 'numberSystem':
            return(
          <>
           <div className="conversion-types">
              <h4>Select conversion type:</h4>
              <div className="conversion-group">
                <label className="conversion-label">
                  <input
                    type="radio"
                    name="conversionType"
                    value="decToBin"
                    checked={conversionType === 'decToBin'}
                    onChange={(e) => handleConversionTypeChange(e.target.value)}
                  />
                  <span>10 - 2</span>
                </label>
                
                <label className="conversion-label">
                  <input
                    type="radio"
                    name="conversionType"
                    value="decToHex"
                    checked={conversionType === 'decToHex'}
                    onChange={(e) => handleConversionTypeChange(e.target.value)}
                  />
                  <span>10 - 16</span>
                </label>
                
                <label className="conversion-label">
                  <input
                    type="radio"
                    name="conversionType"
                    value="binToDec"
                    checked={conversionType === 'binToDec'}
                    onChange={(e) => handleConversionTypeChange(e.target.value)}
                  />
                  <span>2 - 10</span>
                </label>
                
                <label className="conversion-label">
                  <input
                    type="radio"
                    name="conversionType"
                    value="hexToDec"
                    checked={conversionType === 'hexToDec'}
                    onChange={(e) => handleConversionTypeChange(e.target.value)}
                  />
                  <span> 16 - 10</span>
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>
                {conversionType === 'decToBin' || conversionType === 'decToHex' 
                  ? 'Decimal number:' 
                  : conversionType === 'binToDec' 
                    ? 'Binary number:' 
                    : 'Hexadecimal number:'}
              </label>
              <input
                type={conversionType === 'decToBin' || conversionType === 'decToHex' ? 'number' : 'text'}
                value={inputValues.number || ''}
                onChange={(e) => handleInputChange('number', e.target.value)}
                placeholder={
                  conversionType === 'decToBin' || conversionType === 'decToHex' 
                    ? 'Input decimal number' 
                    : conversionType === 'binToDec' 
                      ? 'Input binary number (0 и 1)' 
                      : 'Input hexadecimal number'
                }
                className="number-input"
              />
            </div>
            
          </>
         );
          default:
            // return <div>Неизвестный тип функции: {functionType}</div>;
            return null;
          }
        };
// текст кнопки в зависимости от функции
  const getButtonText = () => {
    switch (functionType) {
      case 'factorial': return 'Calculate factorial';
      case 'power': return 'Calculate power';
      case 'numberSystem': return 'Convert';
      default: return 'Calculate';
    }
  };

        return(
 <article className='article'>
        <h2>{title}</h2>
        <p>{content}</p>

        {showCalculation && functionType && (
          <div className='calculation-section'>
            <h3>Calculator</h3>
            <div className='input-fields'>
              {renderInputFields()}
            </div>
            <button onClick={handleCalculate} className='calculate-btn'>
              {getButtonText()}
            </button>

              {result !== null && (
                <div className='result'>
                  <strong>Result:</strong> {result}
                </div>
              )}
          </div>
        )}
      </article>
    );
}

export default Article;