import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { InicioPagina } from "./pages/Hello/InicioPagina";
import { GeneralContext } from "./contexts/GeneralContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GeneralContext>
         <QueryClientProvider client={queryClient}>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/inicio" element={<InicioPagina />} />
            </Routes>
          </QueryClientProvider>
      </GeneralContext>
          
      </>
    );
  }
  
export default App;
