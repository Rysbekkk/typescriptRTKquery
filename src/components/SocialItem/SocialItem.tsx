import React from 'react';
import { ISocial } from '../../interfaces/interface';
import { Link } from 'react-router-dom'

interface Props {
    item: ISocial
}

const SocialItem: React.FC<Props> = ({ item }) => {
    const { component: Component } = item
    return (
        <li>
            <Link to={`/${item.url}`}>
                <Component />
            </Link>
        </li>
    );
};

export default SocialItem;