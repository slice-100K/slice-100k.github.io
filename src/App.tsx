import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import '@/css/index.css';
import '@/css/app.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import NotFound from '@/pages/NotFound';
import Models from '@/pages/Models';
import Home from '@/pages/Home';
import About from '@/pages/About';
import ModelDetails from '@/pages/ModelDetails';
import Help from '@/pages/Help';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:modelId" element={<ModelDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
