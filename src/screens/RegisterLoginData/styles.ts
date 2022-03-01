import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Button } from "../../components/Form/Button";

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
  padding: 0 ${RFValue(24)}px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const KeyboardView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const SalveButton = styled(Button)`
  margin-top: ${RFValue(8)}px;
`;
