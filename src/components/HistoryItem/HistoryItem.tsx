import React from 'react';
import { IHistoryItem } from '../../interfaces/interface';
import { removeItemFromHistory, setValue } from '../../redux/slicers/searchCocktailSlice';
import { useAppDispatch } from '../../hooks/hooks';

interface Props {
    item: IHistoryItem
}

const HistoryItem: React.FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch()
    const removeItemFromHistoryUI = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        dispatch(removeItemFromHistory(item.id))
    }

    return (
        <li onClick={() => dispatch(setValue(item.value))}>
            <p>{item.value}</p>
            <span onClick={removeItemFromHistoryUI}>x</span>
        </li>
    );
};

export default HistoryItem;