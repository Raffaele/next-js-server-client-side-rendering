const ParametricItemPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h2>Parametric item ({params.id})</h2>
      <p>
        Parametric pages are generically server side rendered but in real time
        as the page depends from the params
      </p>
    </div>
  );
};

export default ParametricItemPage;
