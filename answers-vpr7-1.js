// ========== СЕКРЕТНЫЕ ОТВЕТЫ ДЛЯ ВПР 7 КЛАСС, ВАРИАНТ 1 ==========
// Ответы зашифрованы в Unicode-последовательности

(function() {
    // Зашифрованные ответы
    const encryptedAnswers = {
        ans1: '13468',
        ans2: '2',
        ans3: 'А-3 Б-4 В-1 Г-2 Д-3 Е-1 Ж-1',
        ans4: '7214635',
        ans5: 'А-2 Б-1 В-3',
        ans6: 'НМАУАСМ',
        ans7: '32768',
        ans8: '50',
        ans9: '24',
        ans10: '52',
        ans11: '2',
        ans12: '148',
        ans13: 'Наполеон'
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