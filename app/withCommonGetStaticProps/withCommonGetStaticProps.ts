import { GetStaticProps, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getPosts, TGetPostsParams } from "../../shared/api"
import { getPost } from "../../shared/api/getPost"
import { transformGetPostResponse } from "./transformPost"
import { transformGetPostsResponse } from "./transformPosts"

type responseType = 'onePost' | 'multiplePosts'

export const withCommonGetStaticProps = (mode: responseType = 'multiplePosts', params: TGetPostsParams = {}) => async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (mode === 'multiplePosts') {
        const response = await getPosts(params)
        const cleanResponse = transformGetPostsResponse(response)
        return {
            props: {
                response: cleanResponse
            }
        }
    }
    if (!params) return

    // TODO: (andreymakarenkov) убрать typeassertion
    const response = await getPost({ url: params?.id as string })
    const cleanResponse = transformGetPostResponse(response)
    return {
        props: {
            response: cleanResponse,
        }
    }
}