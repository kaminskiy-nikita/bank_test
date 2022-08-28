import React, {useEffect} from 'react';
import { useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getServiceDetails} from "../redux/store/servicesActionCreators";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from './Services.module.css'

function ServiceDetail(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {serviceDetails, isLoading, isError } = useSelector(state => state.servicesReducer);

    useEffect(() => {
        dispatch(getServiceDetails(id))
    }, [id, dispatch]);

    const onClickHandler = () => dispatch(getServiceDetails(id));
    return (
        <div className={styles.mainContent}>
            <header>
                <p className={styles.pageHeader}>Детали услуги</p>
            </header>
            <main className={styles.main}>
                <Loading isLoading={isLoading} />
                {
                    isError && !isLoading &&
                    <Error onClickHandler={onClickHandler} />
                }
                {
                    serviceDetails.name && !isError &&
                        <div className={styles.serviceDescription}>
                            <div>Наименование: {serviceDetails.name}</div>
                            <div>Описание: {serviceDetails.content}</div>
                            <div>Цена: {serviceDetails.price} рублей</div>
                        </div>
                }
            </main>

        </div>
    );
}

export default ServiceDetail;
