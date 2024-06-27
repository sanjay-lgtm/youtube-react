import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import QrCode from 'qrcode.react';
const QRCode = () => {
    const [theme, setTheme] = useState('light');
    const [inputvalues, setInputValues] = useState('')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-4 transition-colors duration-300` }>
            <div className='absolute top-4 right-10'>
                <button
                    onClick={ toggleTheme }
                    className={ `mt-4 px-4 py-2 rounded-full ${theme === 'light' ? 'bg-blue-500' : 'bg-yellow-500'} text-white 
                    text-4xl`}>
                    { theme === 'light' ? <FaMoon /> : <FaSun /> }
                </button>
            </div>
            <div className={ `p-6 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>QRCode Generator</h1>
                <input type='text'
                value={inputvalues}
                onChange={e => setInputValues(e.target.value)}
                    className={ `border p-2 mb-4 w-full rounded-lg ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-white'}` }
                    placeholder='Enter text or URL'
                />
                <div className='flex justify-center'>
                    <QrCode value={ inputvalues } />
                </div>
            </div>
        </div>
    )
}

export default QRCode
