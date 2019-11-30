const getType = item => Object.prototype.toString.call(item).slice(8, -1)
const classNames = (...rest) => {
  return rest
    .filter(item => item && item !== true)
    .map(item => {
      const itemType = getType(item)
      if (itemType === "Array") {
        return classNames(...item)
      } else if (itemType === "Object") {
        return Object.keys(item)
          .filter(key => item[key])
          .join(" ")
      }
      return item
    })
    .join(" ")
}
