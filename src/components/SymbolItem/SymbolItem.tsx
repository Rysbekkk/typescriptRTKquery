import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
    item: string
}

const SymbolItem: React.FC<Props> = ({ item }) => {
    return (
        <Link to={`/pagination/${item}`}>
            {item}
        </Link>
    );
};

export default SymbolItem;