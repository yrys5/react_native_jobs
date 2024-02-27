export const checkImageURL = (url) => {
    if (!url) return false;
    else {
        // Rozszerzono listę rozszerzeń o 'svg' i dodano obsługę parametrów zapytań po rozszerzeniach plików
        const pattern = new RegExp('^https?:\\/\\/(.+\\.)?(png|jpg|jpeg|bmp|gif|webp|svg)(\\?.*)?$', 'i');
        return pattern.test(url);
    }
};

