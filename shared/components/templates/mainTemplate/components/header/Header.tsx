import { ComponentType, ReactElement, ReactNode } from "react";
export type THeaderProps = {
    title: string;
    Icon: any;
}

export const Header = ({ title = '.my_blog', Icon }: THeaderProps) =>
(
    <header>
        <p>
            {title}
        </p>
        <Icon />
    </header>
)
