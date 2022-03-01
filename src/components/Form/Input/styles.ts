import { TextInput } from "react-native";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin-bottom: ${RFValue(17)}px;
`;

export const Label = styled.Text`
  color: #888d97;
  margin-bottom: 7px;
  font-size: ${RFValue(15)}px;
  font-family: "Rubik_400Regular";
`;

export const Error = styled.Text`
  color: #e83f5b;
  margin-bottom: 4px;
  font-size: ${RFValue(13)}px;
  font-family: "Rubik_300Light";
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding: 0 20px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px #e3e4e5;
  height: ${RFValue(56)}px;
`;

export const FormInput = styled(TextInput)`
  flex: 1;
  color: #3d434d;
  height: 100%;
  font-size: ${RFValue(15)}px;
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: "#888D97",
})`
  opacity: 0.6;
`;
