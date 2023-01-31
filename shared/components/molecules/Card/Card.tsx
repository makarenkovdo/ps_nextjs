import { ContentBlock, ImgBlock } from "./components"
import { TCardProps } from "./TCardProps"
import styles from './Card.module.css'

export const Card = ({ text, title, id, imgHref, author }: TCardProps) =>
    <section className={styles.card}>
        <ImgBlock imgHref={imgHref} title={title} />
        <ContentBlock id={id} title={title} text={text} author={author} />
    </section>
