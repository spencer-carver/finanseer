import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const NAV_ITEMS = {
    Overview: "/overview",
    Blotter: "/blotter"
};

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className={ styles.nav }>
            <ul className={ styles.options }>
                { Object.entries(NAV_ITEMS).map(([text, path]) => {
                    const className = `${ styles.option }${ location.pathname === path ? ` ${ styles.selected }` : "" }`;

                    return <Link className={ className } to={ path }><li>{ text }</li></Link>;
                }) }
            </ul>
        </nav>
    );
};

export default Navigation;