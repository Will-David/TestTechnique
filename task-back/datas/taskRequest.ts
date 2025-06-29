export interface TaskRequest {
    title: string,
    description: string,
    status: "pending" | "done"
}