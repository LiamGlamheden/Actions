import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './Navigators/RootStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default App;
