import All from "./pages/All";
import FolderStructure from './components/other/FolderStructure'
import CreateNewFolder from "./components/other/CreateNewFolder";
import UploadFile from "./components/other/UploadFile";
import MyTable from "./pages/MyTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <All />
      </QueryClientProvider>
    </div>
  );
}

export default App;
