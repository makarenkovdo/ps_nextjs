import { TGetPostsResponse } from "../../shared/api";
import { TGetPostsCleanResponse } from "./TGetPostCleanReponse";
import { transformGetPostResponse } from "./transformPost";

export const transformGetPostsResponse = (response: TGetPostsResponse): TGetPostsCleanResponse =>
    response.map((data) => transformGetPostResponse(data))
