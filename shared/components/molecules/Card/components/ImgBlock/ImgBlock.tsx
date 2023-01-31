import Image from "next/image"
import { TCardProps } from "../../TCardProps"

type TProps = Pick<TCardProps, 'imgHref' | 'title'>

export const ImgBlock = ({ imgHref, title }: TProps) => <Image alt={title} src={imgHref} width='300' height='192' />
