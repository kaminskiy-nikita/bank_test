import React, {useEffect} from 'react';
import { useNavigate } from 'react-router'
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../redux/store/servicesActionCreators";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from './Services.module.css'

function ServiceList() {
    const dispatch = useDispatch();
    const {services, isLoading, isError } = useSelector(state => state.servicesReducer);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getServices())
    }, [dispatch])

    const onClickHandler = () => dispatch(getServices());
    return (
        <div className={styles.mainContent}>
            <header>
                <p className={styles.pageHeader}>Список услуг</p>
            </header>
            <main className={styles.main}>
                <Loading isLoading={isLoading} />
                {
                    isError && !isLoading &&
                    <Error onClickHandler={onClickHandler} />
                }
                {
                    Boolean(services.length) && !isError &&
                    <ul className={styles.list}>
                        {
                            services.map((service) => {
                                return <li onClick={() => navigate(`/${service.id}/details`)} key={service.id}>{service.name}</li>
                            })
                        }
                    </ul>
                }
            </main>

        </div>
    );
}

export default ServiceList;
