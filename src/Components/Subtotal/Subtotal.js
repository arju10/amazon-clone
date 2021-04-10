import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';
const Subtotal = () => {
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    return (
        <div className = "subtotal">
            
            <CurrencyFormat
             renderText={(value)=>(
             <>
              <p>
                  Subtotal({basket.length} items):
                  <strong>{value} 0</strong>
              </p>
              <small className = "subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
              </>
             )
            }
            decialScale ={2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"}/>
            <button onClick = {e => history.push('/payment')}>Process to Checkout</button>
        </div>
    );
};

export default Subtotal;