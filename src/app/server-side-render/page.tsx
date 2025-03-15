import { DefaultServerSideComponent } from "../_components/DefaultServerSideComponent";

// In server side render components we can't access to:
// 1. hooks
// 2. window
// 3. LocalStorage, SessionStorage
const ServerSideRenderPage = () => {
  console.log("ServerSideRenderPage");
  return (
    <div>
      <h2>Server Side Render components</h2>
      <p>By default Next.js render every page as Server Component</p>
      <p>
        The server side page is created and cashed automatically once during the
        build of the app
      </p>
      <DefaultServerSideComponent />
    </div>
  );
};

export default ServerSideRenderPage;
