import { ShoppingCartContext } from "../Context";

/**
 * Calculates the total price of prices in an Array
 * @param {Array} productList with prices
 * @returns {number}a total number formated in currency
 */
const totalPrince = (productList) => {
    const totalCount = productList.reduce(( total, actual) => total + actual.price
    , 0)
    return totalCount
};


const formatDate = (date) => {
    const formatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    return date.toLocaleString('es-ES', formatOptions)
};

const formatCurrency = (value) => {
    const settings = {
        style: "currency",
        currency: "USD",
      }
    const newValue = value.toLocaleString('en-US', settings)
    return newValue
}



export { totalPrince, formatDate, formatCurrency };