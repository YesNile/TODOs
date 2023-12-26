import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {MainWrapper} from "./Styles";
import {TasksPanel} from "./components/TasksPanel/TasksPanel";

function App() {

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
        <MainWrapper>
          <TasksPanel/>
        </MainWrapper>
      </QueryClientProvider>
  );
}
export default App;
