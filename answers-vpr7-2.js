// ========== СЕКРЕТНЫЕ ОТВЕТЫ ДЛЯ ВПР 7 КЛАСС, ВАРИАНТ 2 ==========
// Ответы зашифрованы в Unicode-последовательности

(function() {
    // Зашифрованные ответы
    const encryptedAnswers = {
        ans1: '2468',
        ans2: '2',
        ans3: '2',
        ans4: 'БЕАДВЖГ',
        ans5: 'А-2 Б-1 В-3',
        ans6: '7',
        ans7: '2048',
        ans8: '50',
        ans9: '256000',
        ans10: '31',
        ans11: '4',
        ans12: '18',
        ans13: 'служанка'
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