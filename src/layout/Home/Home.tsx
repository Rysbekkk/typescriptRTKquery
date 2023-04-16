
import s from './Home.module.scss'
import { useGetCocktailsByCategoryQuery } from '../../redux/api/cocktailApi';
import List from '../../components/List/List';
import { ICocktail } from '../../interfaces/interface';
import CocktailItem from '../../components/CocktailItem/CocktailItem';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCategory } from '../../redux/slicers/selectedCategorySlice';

const Home = () => {

    const selectedCategory = useAppSelector(state => state.selectedCategorySlice.category)
    const { data, error, isLoading } = useGetCocktailsByCategoryQuery(selectedCategory)
    const dispatch = useAppDispatch()


    const handleCategoryChange = (category: string) => {
        dispatch(setCategory(category))
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />
            <section id={s.home} className={s.home}>
                <div className="container">
                    <CategorySelect
                        handleCategoryChange={handleCategoryChange}
                    />
                    <div className='row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                        <List
                            items={data?.drinks ?? []}
                            renderItem={
                                (item: ICocktail) => <CocktailItem item={item} key={item.idDrink} />
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;