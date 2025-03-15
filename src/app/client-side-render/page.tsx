"use client";

import { DefaultServerSideComponent } from "../_components/DefaultServerSideComponent";

// If we want a client side components we need to use the "use client" directive on top of the file

const ClientSideRenderPage = () => {
  console.log("ClientSideRenderPage");
  return (
    <div>
      <h2>Client Side Render components</h2>
      <p>
        Next.js render every page with the directive <code>"use client"</code>
        as Client Component
      </p>
      <DefaultServerSideComponent />
    </div>
  );
};

export default ClientSideRenderPage;
