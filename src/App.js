import React from 'react'

import {ThemeProvider} from './contexts/ThemeContext'

import PageContent from './components/PageContent'
import Nav from './components/Nav'
import Form from './components/Form'

export default function App() {
    return (
        <ThemeProvider>
            <PageContent>
                <Nav/>
                <Form/>
            </PageContent>
        </ThemeProvider>
    )
}
