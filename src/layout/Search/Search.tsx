import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useSearchCocktailsByNameQuery } from '../../redux/api/cocktailApi';
import List from '../../components/List/List';
import CocktailItem from '../../components/CocktailItem/CocktailItem';
import { IDetails } from '../../interfaces/interface';
import { setValue } from '../../redux/slicers/searchCocktailSlice';
import { setSearchHistory } from '../../redux/slicers/searchCocktailSlice';


const Search = () => {
    const { value } = useAppSelector(state => state.searchCocktailSlice)
    const dispatch = useAppDispatch()
    const { data, error, isLoading } = useSearchCocktailsByNameQuery(value)

    const handleSearchValue = (value: string) => {
        dispatch(setValue(value))
    }
    const handleSearchHistory = (value: string) => {
        dispatch(setSearchHistory(value))
    }
    console.log(data)
    return (
        <section>

            <div className="container">
                <h2>Search</h2>
                <SearchInput
                    handleSearchValue={handleSearchValue}
                    handleSearchHistory={handleSearchHistory}
                />
                {!data?.drinks && <h2>Cocktails not found</h2>}

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

export default Search;