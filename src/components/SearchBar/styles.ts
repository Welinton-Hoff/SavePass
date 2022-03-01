import { TextInput } from "react-native";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(56)}px;
  margin-top: ${RFValue(-28)}px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  color: #3d434d;
  font-size: 15px;
  padding: 0 20px;
  background: #ffffff;
  font-size: ${RFValue(15)}px;
  font-family: "Rubik_400Regular";

  border: 1px #e3e4e5;
  border-right-width: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Button = styled.Pressable`
  padding: 16px;
  background: #ffcc00;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: "#3D434D",
})``;
