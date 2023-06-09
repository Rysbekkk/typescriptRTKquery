export interface ISocial{
    id:number
    url:string 
    component:React.FC
}

export interface ICocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }


  export interface IStrCategory{
    strCategory:string
  }

  export interface IDetails{
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string;
    strVideo: string | null;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string;
    strInstructionsFR: string | null;
    strInstructionsIT: string;
    strInstructionsZH_HANS: string | null;
    strInstructionsZH_HANT: string | null;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string;
    strImageAttribution: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
  }
  
  export interface IHistoryItem{
    id:string
    value:string
  }

  export interface IHistory {
    value: string
    searchHistory:IHistoryItem[]
  }
  

  export interface ILinks {
    id: number;
    url: string;
    title: string;
}