import { TGetPostsParams } from ".";
import { apiInstance } from "./apiInstance";
import { TGetPostResponse } from "./TGetPost";

export const getPost = async ({ url = '', config }: TGetPostsParams = {}): Promise<TGetPostResponse> =>
    await (await apiInstance.get(url, config)).data
