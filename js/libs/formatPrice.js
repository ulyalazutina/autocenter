export const formatPrice = (price) => {
    return (price).toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0, style: 'currency', currency: 'RUB' });
}