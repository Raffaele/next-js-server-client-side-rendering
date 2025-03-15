import { ParametricNav } from "./_components/ParametricNav";

const ParametricLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ParametricNav />
      {children}
    </div>
  );
};

export default ParametricLayout;
