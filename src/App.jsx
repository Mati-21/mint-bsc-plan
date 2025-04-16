import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./Components/AppLayout";
import Excutive from "./pages/Excutive";
import WorkUnit from "./pages/WorkUnit";
import Login from "../src/pages/Login";
import Minister from "./pages/Minister";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="excutive" element={<Excutive />} />
            <Route path="workunit" element={<WorkUnit />} />
            <Route path="minister" element={<Minister />} />
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
