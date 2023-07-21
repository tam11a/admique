// import React from "react";
// import { Slot } from "expo-router";

// import * as Font from "expo-font";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Text } from "react-native";
// import * as SplashScreen from "expo-splash-screen";

// const AppLayout = () => {
// 	const [fontLoaded] = Font.useFonts({
// 		fredoka: require("../assets/fonts/Fredoka.ttf"),
// 	});

// 	React.useCallback(async () => {
// 		if (fontLoaded) {
// 			console.log("Loaded");
// 			await SplashScreen.hideAsync();
// 		}
// 	}, [fontLoaded]);

// 	if (!fontLoaded) return null;

// 	console.log(fontLoaded);
// 	return (
// 		<SafeAreaView>
// 			<Text
// 				style={{
// 					fontFamily: "fredoka",
// 					fontWeight: "bold",
// 				}}
// 			>
// 				Hello
// 			</Text>
// 		</SafeAreaView>
// 	);
// };

// export default AppLayout;
