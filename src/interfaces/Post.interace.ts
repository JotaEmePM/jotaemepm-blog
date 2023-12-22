export interface PostInterface {
    title: string
    subtitle: string
    publicationDate: string
    slug: string
    image: string
    trimcontent: string
}

export interface PaginationPostInterface {
    docs: PostInterface[]
    hasMode: boolean
    hasNextPage: boolean
    hasPrevPage:boolean
    limit: number
    nextPage: number
    page: number
    pagingCounter: number
    totalDocs: number
    totalPages: number
}