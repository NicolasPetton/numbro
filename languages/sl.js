/*!
 * numbro.js language configuration
 * language : Slovene
 * locale: Slovenia
 * author : Tim McIntosh (StayinFront NZ)
 */

module.exports = {
    langLocaleCode: "sl",
    cultureCode: "sl",
    delimiters: {
        thousands: ".",
        decimal: ","
    },
    abbreviations: {
        thousand: "tis.",
        million: "mil.",
        billion: "b",
        trillion: "t"
    },
    ordinal: function() {
        return ".";
    },
    currency: {
        symbol: "€",
        code: "EUR"
    }
};
