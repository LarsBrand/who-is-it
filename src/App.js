import './App.scss';
import PhotoCarousal from './PhotoCarousel';
import WithStateContext from './StateContext';
import WithHotKeys from './WithHotKeys';

function App() {
  return (
    <WithStateContext>
      <WithHotKeys>
        <div className="app">
          <div className="gradient-border">
            <PhotoCarousal/>        
          </div>
        </div>
      </WithHotKeys>
    </WithStateContext>
  );
}

export default App;
