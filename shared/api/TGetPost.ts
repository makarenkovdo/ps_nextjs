import { AxiosRequestConfig } from "axios";

export type TGetPostsParams = {
    url?: string;
    config?: AxiosRequestConfig
}

export type TGetPostResponse = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type TGetPostsResponse = TGetPostResponse[]