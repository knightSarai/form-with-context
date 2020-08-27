import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';

export default function PageContent(props) {
    const {isDarkMode} = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode? "#112d4e" : "#f4f4f4",
        height: "100vh",
        width: "100vw"
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

