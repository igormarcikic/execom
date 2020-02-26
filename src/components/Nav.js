import React from 'react';
import * as styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <div className={styles.Logo}><Link to="/">Hacker News</Link></div>
                <div className={styles.item}><Link to="/">Stories</Link></div>
                <div className={styles.item}><Link to="/about">About</Link></div>
            </nav>
        </>
    )
}

export default Nav;