export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  })
}

export const priceFilter = (goods, valueMin, valueMax) => {
  return goods.filter((goodsItem) => {
    if (valueMax) {
      return goodsItem.price >= valueMin && goodsItem.price <= valueMax;
    } return goodsItem.price >= valueMin
  })
}

export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true
    } else {
      return goodsItem
    }
    
  })
}