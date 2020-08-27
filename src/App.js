import React from 'react'

import {ThemeProvider} from './contexts/ThemeContext';
import {LanguageProvider} from './contexts/LanguageContext';

import PageContent from './components/PageContent';
import Nav from './components/Nav';
import Form from './components/Form';

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <PageContent>
                    <Nav/>
                    <Form/>
                </PageContent>
            </LanguageProvider>
        </ThemeProvider>
    )
}
