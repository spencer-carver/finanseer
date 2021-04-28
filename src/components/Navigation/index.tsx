import React from "react";
import { Link, useLocation } from "react-router-dom";
import PAGES from "../../constants/pages";
import styles from "./styles.module.scss";

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className={ styles.nav }>
            <ul className={ styles.options }>
                { Object.entries(PAGES).map(([text, path]) => {
                    const className = `${ styles.option }${ location.pathname === path ? ` ${ styles.selected }` : "" }`;

                    return <Link className={ className } to={ path }><li>{ text }</li></Link>;
                }) }
            </ul>
        </nav>
    );
};

export default Navigation;