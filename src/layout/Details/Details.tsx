import React, { useMemo, useCallback } from 'react';
import s from './Details.module.scss'
import { useParams } from 'react-router-dom';
import { useGetCocktailDetailsQuery } from '../../redux/api/cocktailApi';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import DetailsFirst from './DetailsFirst';
import DetailsSecond from './DetailsSecond';


interface IParams {
    [key: string]: string | undefined;
    id?: string;
}



const Details = () => {

    const { id } = useParams<IParams>()

    const { data, error, isLoading } = useGetCocktailDetailsQuery(id)

    console.log(data)

    console.log(id)

    const generateValue = useCallback((str: string) => {
        if (data) {
            return Object.entries(data.drinks[0])
                .filter(([key, value]) => key.startsWith(str) && value)
                .map(([_, value]) => value)
        }
        return [];
    }, [data])

    const ingredients = useMemo(() => generateValue('strIngredient'), [generateValue])
    console.log(data)

    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />
            <section id={s.details} className={s.details}>
                <div className="container">
                    <div className='row gy-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                        <DetailsFirst item={data?.drinks[0]} />
                        <DetailsSecond ingredients={ingredients} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;