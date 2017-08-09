/*!
 * numbro.js language configuration
 * language: Norwegian Bokmål
 * locale: Norway
 * author : Benjamin Van Ryseghem
 */

module.exports = {
    langLocaleCode: "nb-NO",
    cultureCode: "nb-NO",
    delimiters: {
        thousands: " ",
        decimal: ","
    },
    abbreviations: {
        thousand: "t",
        million: "M",
        billion: "md",
        trillion: "t"
    },
    currency: {
        symbol: "kr",
        position: "postfix",
        code: "NOK"
    },
    defaults: {
        currencyFormat: ",4 a"
    },
    formats: {
        fourDigits: "4 a",
        fullWithTwoDecimals: ",0.00 $",
        fullWithTwoDecimalsNoCurrency: ",0.00",
        fullWithNoDecimals: ",0 $"
    }
};
