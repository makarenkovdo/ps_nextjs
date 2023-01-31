import { PropsWithChildren, ReactNode } from "react";

type TProps = {
    title: string;
}

export const Footer = ({ title }: TProps) =>
    <footer>{title}</footer>

