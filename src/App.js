import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
const App = () => {
    const {t, i18n} = useTranslation();
    //Default Dil Ayarı
    React.useEffect(() => {
        i18n.changeLanguage('tr');
    }, []);
    //Dil Değiştirme
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*Dil 1 Kullanım*/}
                <p>{t('description.part1')}</p>
                <p>{t('description.part2')}</p>
                <hr/>
                <img src={logo} className="App-logo" alt="logo"/>
                {/*Dil 2 Kullanım*/}
                <p><Trans i18nKey="description.part1"/></p>
                <p><Trans i18nKey="description.part2"/></p>
                <hr/>
                <button type="button" onClick={() => changeLanguage('de')}>de</button>
                <button type="button" onClick={() => changeLanguage('en')}>en</button>
                <button type="button" onClick={() => changeLanguage('tr')}>tr</button>
            </header>
        </div>
    );
};
export default App;