numeral.register('locale', 'ru', {
    delimiters: {
        thousands: ' ',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
	ordinal : function (number) {
        return '';
    },
	//в русском языке с числительными всё не столь однозначно. Опущу этот моментй
    /*ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },*/
    currency: {
        symbol: '₽'
    }
});
//зафиксируем ru другие в данном проекте не предусмотрены на данный момент
numeral.locale('ru');