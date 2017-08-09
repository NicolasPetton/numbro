/*!
 * numbro.js language configuration
 * language : Spanish
 * locale: Chile
 * author : Gwyn Judd : https://github.com/gwynjudd
 */

module.exports = {
    langLocaleCode: "es-CL",
    cultureCode: "es-CL",
    delimiters: {
        thousands: ".",
        decimal: ","
    },
    abbreviations: {
        thousand: "k",
        million: "mm",
        billion: "b",
        trillion: "t"
    },
    ordinal: (number) => {
        let b = number % 10;
        return (b === 1 || b === 3) ? "er" : (b === 2) ? "do" : (b === 7 || b === 0) ? "mo" : (b === 8) ? "vo" : (b === 9) ? "no" : "to";
    },
    currency: {
        symbol: "$",
        position: "prefix",
        code: "CLP"
    },
    defaults: {
        currencyFormat: "$0,0"
    },
    formats: {
        fourDigits: "4 a",
        fullWithTwoDecimals: ",0.00 $",
        fullWithTwoDecimalsNoCurrency: ",0.00",
        fullWithNoDecimals: ",0 $"
    }
};
