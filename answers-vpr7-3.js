// ========== СЕКРЕТНЫЕ ОТВЕТЫ ДЛЯ ВПР 7 КЛАСС, ВАРИАНТ 3 ==========
// Ответы зашифрованы в Unicode-последовательности

(function() {
    // Зашифрованные ответы
    const encryptedAnswers = {
        ans1: '13578',
        ans2: '1',
        ans3: 'А-1 б-1 в-1 г-2 д-1 е-3 ж-4',
        ans4: '6453728',
        ans5: 'А-2 б-3 в-1',
        ans6: 'АИНГЧАН',
        ans7: '32768',
        ans8: '56',
        ans9: '2000',
        ans10: '24',
        ans11: '2',
        ans12: '7',
        ans13: 'разумихин'
    };

    // Функция для декодирования (на случай если понадобится Unicode)
    function decodeUnicode(str) {
        if (typeof str !== 'string' || !str.includes('\\u')) return str;
        return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, code) => {
            return String.fromCharCode(parseInt(code, 16));
        });
    }

    // Функция для получения ответов
    window.getCorrectAnswers = function() {
        const correct = {};
        for (let key in encryptedAnswers) {
            correct[key] = decodeUnicode(encryptedAnswers[key]);
        }
        return correct;
    };
})();