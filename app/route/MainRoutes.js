import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Home from "../modules/Items_Collection/containers/Home";
const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: {
        screen: HomeStack
      }
    },
    {
      initialRouteName: "Home"
    }
  )
);
