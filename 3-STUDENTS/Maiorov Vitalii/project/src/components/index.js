import basket from './backet.js'
import catalog from './catalog.js'


export default () => {
    basket.init();
    catalog.init(basket);
}
//export эту функцию в папку src в фаил index.js