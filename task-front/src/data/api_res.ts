export interface ApiResponse<T> {
    data?: T,
    message?: string,
    status?: number,
    error?: ApiError
}

export interface ApiError {
    message: string
    status: number
}