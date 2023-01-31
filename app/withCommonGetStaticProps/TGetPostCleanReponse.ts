export type TGetPostCleanResponse = {
    id: number;
    text: string;
    imgHref: string;
    title: string;
    author: string | number;
}

export type TGetPostsCleanResponse = TGetPostCleanResponse[]