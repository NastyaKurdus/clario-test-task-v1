import { FC } from "react";

interface InfoBlockProps {
  children: React.ReactNode;
}

export const InfoBlock: FC<InfoBlockProps> = ({ children }) => (
  <div className="info-block">{children}</div>
);
