import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient).attrs({
  end: { x: 1, y: 0 },
})`
  width: 100%;
  border-radius: 4px;
  padding: 22px 20px;
  margin-bottom: 8px;
  flex-direction: row;
  border: 1px #e3e4e5;
  align-items: center;
  min-height: ${RFValue(80)}px;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs({
  size: 24,
})`
  opacity: 0.6;
  margin-right: 20px;
`;

export const PassData = styled.View`
  max-width: 243px;
`;

export const Title = styled.Text`
  color: #888d97;
  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(4)}px;
  font-family: "Rubik_400Regular";
`;

export const Password = styled.Text`
  color: #1967fb;
  font-size: ${RFValue(15)}px;
  font-family: "Rubik_500Medium";
`;

export const LoginData = styled.View`
  max-width: 243px;
`;

export const BoldTitle = styled.Text`
  color: #3d434d;
  font-size: ${RFValue(15)}px;
  font-family: "Rubik_500Medium";
  margin-bottom: ${RFValue(4)}px;
`;

export const Email = styled.Text`
  color: #888d97;
  font-size: ${RFValue(13)}px;
  font-family: "Rubik_400Regular";
`;
