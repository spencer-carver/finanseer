import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { getValue } from "../../util/storage";
import { useHistory } from "react-router-dom";
import PAGES from "../../constants/pages";
import styles from "./styles.module.scss";

const Initialize = () => {
    const [ loading, setLoading ] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            getValue("data")
                ? history.push(PAGES.Overview)
                : history.push(PAGES.Survey);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className={ styles.initialize }>
            <LoadingSpinner isLoading={ loading } />
        </main>
    );
};

export default Initialize;