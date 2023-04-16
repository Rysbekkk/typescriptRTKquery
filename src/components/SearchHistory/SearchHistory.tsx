import s from './SearchHistory.module.scss'
import { useAppSelector } from '../../hooks/hooks';
import List from '../List/List';
import HistoryItem from '../HistoryItem/HistoryItem';
import { IHistoryItem } from '../../interfaces/interface';



const SearchHistory = () => {
    const { searchHistory } = useAppSelector(state => state.searchCocktailSlice)


    return (
        <div className={s.searchHistory}>
            {searchHistory.length > 0
                ?
                <ul>
                    <List
                        items={searchHistory}
                        renderItem={
                            (item: IHistoryItem) => <HistoryItem item={item} key={item.id} />
                        }
                    />
                </ul>
                : <h2>No Search History</h2>
            }
        </div>
    );
};

export default SearchHistory;