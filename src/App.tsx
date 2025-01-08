import Map from './components/Map';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

const App = ({ children }: any) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <div className="absolute right-4 top-4 z-20">
        <ModeToggle />
      </div>
      <div className="relative">
        <Map />
      </div>


    </ThemeProvider>
  );
};
export default App;
