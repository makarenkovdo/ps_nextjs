import { TGetPostCleanResponse, TWithGetPostGetStaticProps, withCommonGetStaticProps } from "../../app"
import { getPosts } from "../../shared/api";
import { Card } from "../../shared/components";

type TProps = TWithGetPostGetStaticProps

const Post = ({ response }: TProps) => {
    return <Card {...response} />
}

export const getStaticPaths = async () => {
    const arr = await getPosts()
    return {
        paths: arr.map(((_, idx) => ({ params: { id: `${idx}` } }))),
        fallback: true
    }
}

export const getStaticProps = (withCommonGetStaticProps('onePost'))


export default Post 