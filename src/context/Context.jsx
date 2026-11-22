import React, { useState } from 'react';
import EnglishMessages from './../language/en.json';
import ArabicMessages from './../language/arb.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    // Set default local and messages
    let DefaultLocal = 'en-US';
    let DefaultMessages = EnglishMessages;

    const lang = localStorage.getItem('lang');

    if (lang === 'ar-SA') {
        DefaultLocal = 'ar-SA';
        DefaultMessages = ArabicMessages;
    } else if (lang === 'en-US') {
        DefaultLocal = 'en-US';
        DefaultMessages = EnglishMessages;
    }

    const [mensaje, setMessage] = useState(DefaultMessages);
    const [local, setLocal] = useState(DefaultLocal);

    const selectLanguage = (language) => {
        switch (language) {
            case 'ar-SA':
                setMessage(ArabicMessages);
                setLocal('ar-SA');
                localStorage.setItem('lang', 'ar-SA');
                break;
            case 'en-US':
                setMessage(EnglishMessages);
                setLocal('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessage(EnglishMessages);
                setLocal('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    };

    return (
        <langContext.Provider value={{ selectLanguage }}>
            <IntlProvider locale={local} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { LangProvider, langContext };
