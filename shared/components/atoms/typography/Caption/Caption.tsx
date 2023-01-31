import { CSSProperties } from "react";
import { TCommonTypographyProps } from "../TCommonTypographyProps";

export const Caption = ({ text, color }: TCommonTypographyProps) => <span style={{ color }}>{text}</span>