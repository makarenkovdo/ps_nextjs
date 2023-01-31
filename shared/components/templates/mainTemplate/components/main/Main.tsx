import { PropsWithChildren, ReactNode } from "react";

export type TMainProps = PropsWithChildren

export const Main = ({ children }: TMainProps) => <main>{children}</main>
