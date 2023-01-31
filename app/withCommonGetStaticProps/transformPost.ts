import { TGetPostResponse } from "../../shared/api";
import { TGetPostCleanResponse } from "./TGetPostCleanReponse";

export const transformGetPostResponse = ({ userId, id, title, body }: TGetPostResponse): TGetPostCleanResponse =>
    ({ text: body, author: userId, id, title, imgHref: 'https://picsum.photos/300/192' })
