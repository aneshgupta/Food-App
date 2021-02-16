import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 11WkcHRhfcsTROfnHytmOAjhp_7KK5gZLMZ5iYQBDKPV1MfWtcakNbY884ZiZm66tegJtKweynGl0t7mOpOmRyKjIwLO53OddOvT-KRzq27eyWhif1PPESZ4whD3X3Yx'
  }
});
