export function calculateSalesTax (subtotal, taxrate) {
    
    return Number ((subtotal * taxrate).toFixed(2))

}

export function factorial(num) {
    return (num < 2) ? 1 : num * factorial(num - 1)
}
