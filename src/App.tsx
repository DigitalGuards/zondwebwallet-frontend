import { store, StoreProvider } from './stores/store'
import { AppRouter } from './router/router'

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <StoreProvider value={store}>
        <AppRouter />
      </StoreProvider>
    </div>
  )
}

export default App
