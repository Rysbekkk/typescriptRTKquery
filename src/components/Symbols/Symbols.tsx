import React from 'react';
import { letters } from '../../utils/constants';
import List from '../List/List';
import SymbolItem from '../SymbolItem/SymbolItem';
const Symbols = () => {
    return (
        <div>
            <List
                items={letters}
                renderItem={
                    (item: string) => <SymbolItem item={item} key={item} />
                }
            />
        </div>
    );
};

export default Symbols;