import { AppRoutes } from "./routes/index";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
