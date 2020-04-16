import React, { useContext }from 'react';
import { ChoreListContext } from '../context/ChoreListContext';

const Chore = ({ chore }) => {
    const { removeChore, findItem } = useContext(ChoreListContext)
    return (
        <li className="list-item">
            <span>{chore.title}</span>
            <div>
                <button className="btn-delete chore-btn"
                onClick={() => removeChore(chore.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>{''}
                <button className="btn-edit chore-btn" onClick={() => findItem(chore.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
};

export default Chore