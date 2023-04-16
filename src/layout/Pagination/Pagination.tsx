import React from 'react';
import Symbols from '../../components/Symbols/Symbols';
import { useParams } from 'react-router-dom';
import { useGetCocktailsByLetterQuery } from '../../redux/api/cocktailApi';
import List from '../../components/List/List';
import CocktailItem from '../../components/CocktailItem/CocktailItem';
import { IDetails } from '../../interfaces/interface';
import s from './Pagination.module.scss'

const Pagination = () => {
    const { symbol } = useParams()
    const { data } = useGetCocktailsByLetterQuery(symbol)
    console.log(data)
    return (
        <section className={s.pagination}>

            <Symbols />
            <div className="container">
                <div className='row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                    <List
                        items={data?.drinks ?? []}
                        renderItem={
                            (item: IDetails) => <CocktailItem item={item} key={item.idDrink} />
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Pagination;