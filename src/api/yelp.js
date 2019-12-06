import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer1Kfy0k13xMT-l47V8L6Adv92V4jNgRv41hQtYf-Fe7mwpEGdsI9XSEVww91nrX-pon8c4m0c6VbcOX2J6xzfy9af8ZWitko_JP_yCR0TXV3m5Et-1XdW07ykdH7oXXYx'
    }
});

