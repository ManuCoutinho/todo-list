import usePersistedState from "./utils/usePersistedState";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";


import { GlobalStyles } from "./styles/global";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light"

function App() {  
 const [theme, setTheme] = usePersistedState('theme', light);

 const toggleTheme = () => {
  setTheme(theme.title === 'dark' ? light : dark);
};

return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header toggleTheme={toggleTheme}/>
      <TaskList/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
