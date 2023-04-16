import React from 'react';
import { NavLink } from 'react-router-dom'
import { ILinks } from '../../interfaces/interface';

interface Props {
    item: ILinks
}

const LinkItem: React.FC<Props> = ({ item }) => {
    return (
        <li>
            <NavLink to={`/${item.url}`}>{item.title}</NavLink>
        </li>
    );
};

export default LinkItem;