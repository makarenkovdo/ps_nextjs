import { PropsWithChildren } from "react";
import { mainTemplateData } from "../shared/config/mainTemplateData";
import { MainTemplate } from "../shared/components/templates";

export const AppTemplate = ({ children }: PropsWithChildren) =>
    <MainTemplate headerData={mainTemplateData.headerData}>
        {children}
    </MainTemplate>

