import { Card } from "../../molecules";
import { TCardProps } from "../../molecules/Card/TCardProps";
import styles from './Cards.module.css'

type TProps = { cardsData: TCardProps[] }

export const Cards = ({ cardsData }: TProps) => <section className={styles.cards}>{cardsData?.map((cardData, idx) => <Card key={idx} {...cardData} />)}</section>