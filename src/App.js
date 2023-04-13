import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <section className="max-w-[1440px] bg-[#05070f] mx-auto">
      <RouterProvider router={routes} />
      <Toaster />
    </section>
  );
}

export default App;
