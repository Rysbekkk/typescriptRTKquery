import { RootState,AppDispatch } from "../redux/app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();