import { Dashboard } from "./pages/dashboard";
import { AppProvider } from "./provider/AppProvider";

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}

export default App;
