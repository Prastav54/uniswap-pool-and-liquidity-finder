import { Dashboard } from "./pages/dashboard";
import { AppProvider } from "./provider/AppProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}

export default App;
