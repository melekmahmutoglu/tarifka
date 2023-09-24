import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: {
            fontSize: 20,
            color: '#ff9933',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Meals" component={Meals} options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: {
            fontSize: 20,
            color: '#ff9933',
            fontWeight: 'bold',
          },
          headerTintColor: '#ff9933',
        }} />
        <Stack.Screen name="Details" component={Details} options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: {
            fontSize: 20,
            color: '#ff9933',
            fontWeight: 'bold',
          },
          headerTintColor: '#ff9933',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

