import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
    const buildYear = 2021;
    const currentYear = new Date().getFullYear();

    const range = buildYear === currentYear
        ? `${ buildYear }`
        : `${ buildYear } - ${ currentYear }`

    return <footer className={ styles.footer }>© { range } Spencer Carver</footer>;
};

export default Footer;
