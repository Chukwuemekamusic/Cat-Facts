import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CatQuery from "./app/catAppWithQuery/CatQuery";
import CatApp from "./app/catApp/CatApp";
import ExcuseApp from "./app/excuseApp/ExcuseApp";
import Navbar from "./Navbar";
import Forms from "./app/Forms/Forms";
import MyForm from "./MyForm";
import LogForm from "./LogForm";
import DangerText from "./components/DangerText";

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
          <Route path="/register-form" element={<Forms />} />

          <Route path="/myform" element={<MyForm />} />
          <Route path="/login-form" element={<LogForm/>}/> 

          <Route path="*" element={<DangerText tag='h3'>Page not Found!!!</DangerText>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
