import { Cards } from '../shared/components/organisms'
import { TWithGetPostsGetStaticProps, withCommonGetStaticProps } from '../app'


export default function Home({ response }: TWithGetPostsGetStaticProps) {
  return (
    <Cards cardsData={response} />
  )
}

export const getStaticProps = withCommonGetStaticProps()