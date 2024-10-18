import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); 
            setInput('');
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
            <h1 style={{fontFamily:"sans-serif",textAlign:"center"}}>Calculator</h1>
            <div style={{ 
                marginBottom: '10px', 
                fontSize: '24px', 
                padding: '10px', 
                border: '2px solid black', 
                borderRadius: '5px',
                minHeight: '40px',
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: '#f0f0f0'
            }}>
                {input || '0'}
            </div>

            
            <div style={{
                marginBottom: '10px', 
                fontSize: '20px', 
                color: 'gray', 
                padding: '10px', 
                border: '2px solid black', 
                borderRadius: '5px', 
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: '#e0e0e0'
            }}>
                {result || '0'}
            </div>

            {}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',  
                gap: '10px', 
                
            }}>
                
                <button style={buttonStyle} onClick={() => handleInput('7')}>7</button>
                <button style={buttonStyle} onClick={() => handleInput('8')}>8</button>
                <button style={buttonStyle} onClick={() => handleInput('9')}>9</button>
                <button style={buttonStyle} onClick={() => handleInput('+')}>+</button>

                <button style={buttonStyle} onClick={() => handleInput('4')}>4</button>
                <button style={buttonStyle} onClick={() => handleInput('5')}>5</button>
                <button style={buttonStyle} onClick={() => handleInput('6')}>6</button>
                <button style={buttonStyle} onClick={() => handleInput('-')}>-</button>

                <button style={buttonStyle} onClick={() => handleInput('1')}>1</button>
                <button style={buttonStyle} onClick={() => handleInput('2')}>2</button>
                <button style={buttonStyle} onClick={() => handleInput('3')}>3</button>
                <button style={buttonStyle} onClick={() => handleInput('*')}>*</button>

                <button style={buttonStyle} onClick={clearInput}>C</button>
                <button style={buttonStyle} onClick={() => handleInput('0')}>0</button>
                <button style={buttonStyle} onClick={calculateResult}>=</button>
                <button style={buttonStyle} onClick={() => handleInput('/')}>/</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '20px',
    fontSize: '18px',
    border: '2px solid black',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    textAlign: 'center'
};

export default Calculator;
