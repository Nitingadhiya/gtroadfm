const Stack = createStackNavigator();

function MainMenuNavigatoinStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />        
        {/*
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="My Profile" component={MyProfile} />
         <Stack.Screen name="My Subscription" component={Subscription} />
        <Stack.Screen name="About Us" component={AboutUs} />
        
        */}
        
        
      </Stack.Navigator>
      </NavigationContainer>
  );
}



export default MainMenuNavigatoinStack;