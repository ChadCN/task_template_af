import { RouterProvider } from "react-router";
import { createBrowserRouter, Outlet } from "react-router-dom";
import TemplateListView from "./view/templateListView/templateListView";
import TemplateDetailView from "./view/templateDetailView/templateDetailView";
import { templateStore } from "./mobx/templateStore";
import GlobalStyle from "./globalStyle";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <>
      <GlobalStyle />
      <Outlet />
    </>,
    children: [
      {
        path: "",
        element: <TemplateListView templateStore={templateStore}/>
      },
      {
        path:"detail/:templateId",
        element: <TemplateDetailView templateStore={templateStore} editMode={true} />
      },
      {
        path: "new",
        element: <TemplateDetailView templateStore={templateStore} editMode={false} />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
