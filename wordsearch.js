const transpose = require("../../async/matrix_transposition");

const check = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let row of horizontalJoin) {
        if (row.includes(word)) return true
    };
    return false;
};

const wordSearch = (letters, word) => { 
    
    if(check(letters, word)) {
        return true
    };

    if(check(transpose(letters), word)) {
        return true;
    };
    return false; 
};

module.exports = wordSearch;

