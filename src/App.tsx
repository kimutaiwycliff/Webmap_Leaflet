import Map from './components/Map';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

const App = ({ children }: any) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <div className="">
        <Map />
      </div>
      <ModeToggle />
    </ThemeProvider>
  );
};
export default App;
