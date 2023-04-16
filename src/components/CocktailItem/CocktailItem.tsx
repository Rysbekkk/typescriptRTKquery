import { ICocktail } from '../../interfaces/interface';
import s from './CocktailItem.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';


interface Props {
    item: ICocktail
}

const CocktailItem: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const navigateToDetails = () => {
        if (location.pathname === '/') {
            return navigate(`/details/${item.idDrink}`)
        }
        navigate(`${location.pathname}/details/${item.idDrink}`)
    }
    return (
        <div
            className={s.col}
            onClick={navigateToDetails}
        >
            <div className={s.cocktailItem__box}>
                <img src={item.strDrinkThumb} alt="" />
                <h2>{item.strDrink}</h2>
            </div>

        </div>
    );
};

export default CocktailItem;