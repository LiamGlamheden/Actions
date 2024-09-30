import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../Navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;


export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail</Text>
    </View>
  );
}
