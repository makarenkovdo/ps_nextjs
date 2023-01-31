import NextLink from "next/link"
import { PropsWithChildren } from "react"

type TProps = PropsWithChildren<{
    href: string
}>

export const Link = ({ children, href }: TProps) =>
    <NextLink href={href}>{children}</NextLink>

