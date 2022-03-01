import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  hasUserData: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: ${({ hasUserData }) =>
      hasUserData
        ? `${getStatusBarHeight(true) + 16}px  24px 60px 24px`
        : `${getStatusBarHeight(true) + 9}px 0 23px 0`}
    ${({ hasUserData }) =>
      hasUserData &&
      css`
        justify-content: space-between;
      `};
`;

export const AboutUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 4px;
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
`;

export const TextContainer = styled.View`
  margin-left: 16px;
`;

export const HelloMessage = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(20)}px;
  font-family: "Rubik_300Light";
  line-height: ${RFValue(26)}px;
`;

export const BoldText = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(26)}px;
  font-family: "Rubik_500Medium";
`;

export const SecondaryMessage = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(13)}px;
  font-family: "Rubik_300Light";
`;

export const AddButton = styled.Pressable`
  border-radius: 4px;
  border: 1.5px #508bfc;
  padding: ${RFValue(14.5)}px;
`;

export const Icon = styled(Feather)``;

export const BackButton = styled.Pressable`
  left: 13px;
  bottom: 23px;
  position: absolute;
`;

export const Title = styled.Text`
  margin: auto;
  color: #3d434d;
  font-size: ${RFValue(20)}px;
  font-family: "Rubik_500Medium";
`;
