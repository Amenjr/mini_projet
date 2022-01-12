import React from 'react'
import { useSelector } from 'react-redux'
import CardTache from './CardTache';

function ListOfTache() {
    const Taches = useSelector(state=>state.TacheReducer.Taches);
    return (
        <div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {Taches.map(Tache=><CardTache Tache={Tache} key={Tache._id}/>)}
        </div>
        </div>
    )
}

export default ListOfTache
