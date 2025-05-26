class PaginationHelper<T> {
  collection: T[]
  itemsPerPage: number
  collectionLenght: number

  constructor(collection: T[], itemsPerPage: number) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.collectionLenght = this.collection.length
  }

  itemCount(): number {
    return this.collectionLenght
  }

  pageCount(): number {
    return Math.ceil(this.collectionLenght / this.itemsPerPage)
  }

  pageItemCount(pageIndex: number): number {
    if (pageIndex < 0) return -1

    const itemCount = (pageIndex + 1) * this.itemsPerPage - this.collectionLenght
    if (itemCount < 0) return this.itemsPerPage

    return itemCount >= this.itemsPerPage ? -1 : this.itemsPerPage - itemCount
  }

  pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1
    }

    return Math.floor(itemIndex / this.itemsPerPage)
  }
}

const test = new PaginationHelper<number>(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  10
)
console.log(test.pageCount())
console.log(test.itemCount())
console.log(test.pageIndex(0))
