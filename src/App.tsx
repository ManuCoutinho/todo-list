import usePersistedState from './hooks/usePersistedState'
import ErrorBoundary from '../src/utils/ErrorBoundary'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import GlobalStyles from './styles/global'
import dark from './styles/theme/dark'
import light from './styles/theme/light'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <TaskList />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
export default App
