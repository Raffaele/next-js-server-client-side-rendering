import { ParametricNav } from "./_components/ParametricNav";

const ParametricLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ParametricNav />
      {children}
      <p>
        When the file of a parametric page exports the method
        <code>generateStaticParams</code>, NextJS automatically renders that
        page with the params returned by <code>generateStaticParams</code> at
        build time.
      </p>
      <p>
        If the user call the page with some param that is not in the array
        returned by <code>generateStaticParams</code> NextJS create the page on
        demand and keep it in cache for next requests.
      </p>
      <p>
        If the page file export a variable called <code>dynamicParams</code>
        with value <code>false</code> the URLs of the dynamic pages not included
        in the <code>generateStaticParams</code> return will receive a 404 (not
        found) message
      </p>
    </div>
  );
};

export default ParametricLayout;
