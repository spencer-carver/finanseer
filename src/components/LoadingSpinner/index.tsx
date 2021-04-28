import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";

const LoadingSpinner = ({ isLoading = false }) => {
  const [ loading, setLoading ] = useState(isLoading);
  const [ fading, setFading ] = useState(false);

  useEffect(() => {
    if (loading && !isLoading) {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
        setFading(false);
      }, 500);
    }
  }, [loading, isLoading, setLoading, setFading]);

  if (!loading) {
    return null;
  }

  const className = `${ styles.spinner }${ fading ? ` ${ styles.fading }` : "" }`;


  return <div className={ className }><div></div><div></div><div></div><div></div></div>;
}

export default LoadingSpinner;
