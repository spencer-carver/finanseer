import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./styles.module.scss";

const Initialize = () => {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <main className={ styles.initialize }>
            <LoadingSpinner isLoading={ loading } />
        </main>
    );
};

export default Initialize;