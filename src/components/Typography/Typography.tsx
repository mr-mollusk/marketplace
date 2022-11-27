import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Typography.module.scss";

export type AvailableTypographyFamilies = "SpaceMono" | "WorkSans";
export type AvailableTypographyTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "base"
  | "caption";

export type TypographyProps = {
  family: AvailableTypographyFamilies;
  type: AvailableTypographyTypes;
};

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  family,
  type,
}) => {
  return (
    <p className={clsx(styles.Typography, styles[type], styles[family])}>
      {children}
    </p>
  );
};
export default Typography;
