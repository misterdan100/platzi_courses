import { ShoppingCartContext } from "../Context";

/**
 * Calculates the total price of prices in an Array
 * @param {Array} productList with prices
 * @returns {number}a total number formated in currency
 */
const totalPrince = (productList) => {
    const totalCount = productList.reduce(( total, actual) => total + actual.price
    , 0)
    return totalCount.toLocaleString('en-US')
};




export { totalPrince };