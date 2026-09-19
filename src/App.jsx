import { MotionConfig } from 'framer-motion';
import SmoothScroll from './components/common/SmoothScroll';
import Home from './pages/Home';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </MotionConfig>
  );
}
