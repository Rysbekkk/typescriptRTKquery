import React from 'react';


interface IDetailsProps {
    item: any
}

const DetailsFirst: React.FC<IDetailsProps> = ({ item }) => {


    return (
        <div>
            <img src={item?.strDrinkThumb} alt="" />
            <p>{item?.strAlcoholic}</p>
        </div>
    );
};
export default DetailsFirst;