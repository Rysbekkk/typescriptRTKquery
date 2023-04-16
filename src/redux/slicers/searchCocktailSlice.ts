import { createSlice } from '@reduxjs/toolkit';
import { IHistory } from '../../interfaces/interface';

const initialState: IHistory = {
  value: '',
  searchHistory:[]
};

export const searchCocktailSlice = createSlice({
  name: 'searchCocktailSlice',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setSearchHistory:(state,action)=>{
        const item = {
            id:new Date().toISOString(),
            value:action.payload
        }
        const exist = state.searchHistory.some(el=>el.value===action.payload)
        if(!exist){
          state.searchHistory=[item,...state.searchHistory]
        }
       
    },
    removeItemFromHistory:(state,action)=>{

      state.searchHistory=state.searchHistory.filter(el=>el.id!==action.payload)
    }
  },
});

export const { setValue,setSearchHistory ,removeItemFromHistory} = searchCocktailSlice.actions;

export default searchCocktailSlice.reducer;