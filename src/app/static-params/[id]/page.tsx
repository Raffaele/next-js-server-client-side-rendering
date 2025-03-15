import { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ id: "foo" }, { id: "bar" }];
}

const StaticParamsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>generateStaticParams method</h2>
      {children}
    </div>
  );
};

export default StaticParamsLayout;
