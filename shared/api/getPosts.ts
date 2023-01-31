import { apiInstance } from "./apiInstance";
import type { TGetPostsParams, TGetPostsResponse } from "./TGetPost";

export const getPosts = async ({ url = '', config }: TGetPostsParams = {}): Promise<TGetPostsResponse> =>
    await (await apiInstance.get(url, config)).data
