import React from 'react';
import { IStrCategory } from '../../interfaces/interface';

interface Props {
    item: IStrCategory
}

const CategoryItem: React.FC<Props> = ({ item }) => {
    return (
        <option value={item.strCategory}>
            {item.strCategory}
        </option>
    );
};

export default CategoryItem;