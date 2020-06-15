export interface TopicosPaginated {
    content: any[],
    pageable,
    totalPages:	number,
    totalElements: number,
    last: boolean,
    first: boolean,
    sort,
    numberOfElements: number,
    size: number,
    number: number,
    empty: boolean
}