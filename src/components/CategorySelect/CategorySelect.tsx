import React, { ChangeEvent } from 'react';
import { useGetCategoriesQuery } from '../../redux/api/cocktailApi';
import List from '../List/List';
import { IStrCategory } from '../../interfaces/interface';
import CategoryItem from '../CategoryItem/CategoryItem';
import s from './CategorySelect.module.scss'

interface Props {
    handleCategoryChange: (category: string) => void
}

const CategorySelect: React.FC<Props> = ({ handleCategoryChange }) => {
    const { data, isLoading, error } = useGetCategoriesQuery(null)
    console.log(data, 'category')
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleCategoryChange(e.target.value)
    }
    return (
        <div className={s.category}>
            <select onChange={handleChange}>
                <List
                    items={data?.drinks ?? []}
                    renderItem={
                        (item: IStrCategory) => <CategoryItem item={item} key={item.strCategory} />
                    }
                />
            </select>
        </div>
    );
};

export default CategorySelect;