
import { Main, Header } from "./components";
import type { THeaderProps, TMainProps } from "./components";
import { PropsWithChildren } from "react";

export type TMainTemplateProps = PropsWithChildren<{
    headerData: THeaderProps;
    mainData?: TMainProps;
}>

export const MainTemplate = ({ headerData, mainData, children }: TMainTemplateProps) => (
    <>
        <Header {...headerData} />
        <Main>
            {children}
        </Main>
    </>
)


