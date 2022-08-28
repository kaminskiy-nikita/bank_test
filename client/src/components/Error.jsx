import React from 'react';
import styles from "../pages/Services.module.css"

function Error({onClickHandler}) {
    return (
        <div className={styles.error}>
            Произошла ошибка! <span onClick={onClickHandler}>Повторить запрос</span>
        </div>
    );
}

export default Error;
