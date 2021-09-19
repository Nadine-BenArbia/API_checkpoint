import React from 'react'
import {} from 'react-bootstrap'
import CoktailDetail from '../../pages/CocktailDetail page/Coktail Detail'

const coktailCard = ({el}) => {
    return (
       < div>
      <div className="Card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{el.drinks.idDrink}</h5>
          <p className="card-text">{el.strInstructions}</p>
          <a href="#" className="btn btn-primary"><CoktailDetail/></a>
        </div>
      </div>
        </div>
    );
}


export default coktailCard