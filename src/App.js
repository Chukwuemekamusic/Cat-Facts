import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatApp from "./app/catApp/CatApp";
import ExcuseApp from "./app/excuseApp/ExcuseApp";
import Navbar from "./Navbar";
import CatQuery from "./app/catAppWithQuery/CatQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>This is my React Apps Page</h1>} />
          <Route path="/catfacts" element={<CatApp />} />
          <Route path="/excuse" element={<ExcuseApp />} />
          <Route path="/catquery" element={<CatQuery />} />

          <Route path="*" element={<h2>Page not Found!!!</h2>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
