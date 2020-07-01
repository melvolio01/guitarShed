export const addTrolleyItem = (trolleyItems, newItem) => {
    const existingItem = trolleyItems.find(item => {
        return item.newItem.id === newItem.id
    })

    if (existingItem) {
        return trolleyItems.map(item => {
            return item.newItem.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        })
    }

    return [...trolleyItems, { newItem, quantity: 1 }]
}

export const removeTrolleyItemSingle = (trolleyItems, itemReceived) => {
    const { newItem } = itemReceived;
    return trolleyItems.map(item => {
        if (item.quantity === 0) return item;
        return item.newItem.id === newItem.id ? { ...item, quantity: item.quantity - 1 } : item;
    })
}