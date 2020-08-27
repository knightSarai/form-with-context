import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

import {AppBar, Toolbar, IconButton, InputBase, Switch} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/NavStyles';
import { LanguageContext } from '../contexts/LanguageContext';

const content = {
    english: {
        search: "Search"
      },
      french: {
        search: "Chercher"
      },
      spanish: {
        search: "Buscar"
      }
}

function Nav (props) {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const {classes} = props;
    const {search} = content[language];
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span className={classes.language}>{language}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme}/>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder={`${search}...`}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Nav);