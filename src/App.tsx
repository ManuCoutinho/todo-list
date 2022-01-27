import usePersistedState from "./hooks/usePersistedState";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { ThemeProvider } from "styled-components";


import { GlobalStyles } from "./styles/global";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";
import ErrorBoundary from "./ErrorBoundary";

function App() {  
 const [theme, setTheme] = usePersistedState('theme', light);

 const toggleTheme = () => {
  setTheme(theme.title === 'dark' ? light : dark);
};

return(
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        {console.log(theme)}
        <GlobalStyles/>
        <Header toggleTheme={toggleTheme}/>
        <TaskList/>     
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App;
