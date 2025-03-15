export const DefaultServerSideComponent = () => {
  console.log("DefaultServerSideComponent");
  return (
    <div>
      Every component is created as server side component unless:
      <ol>
        <li>
          The component file start with <code>"use client"</code> directive
        </li>
        <li>The component is child of a client component</li>
      </ol>
    </div>
  );
};
