import { Body1, Caption, H3, Link } from "../../../../atoms"
import { TCardProps } from "../../TCardProps"

type TProps = Omit<TCardProps, 'imgHref'>


export const ContentBlock = ({ title, text, author, id }: TProps) =>
    <article>
        <Caption text={`${author}`} />
        <H3 text={title} />
        <Body1 text={text} />
        <Link href={`post/${id}`}>Читать</Link>
    </article>

