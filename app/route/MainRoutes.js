import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Home from "../modules/Items_Collection/containers/Home";
import ItemsHome from "../modules/Items_Collection/containers/ItemsHome";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  ItemsHome: {
    screen: ItemsHome
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
