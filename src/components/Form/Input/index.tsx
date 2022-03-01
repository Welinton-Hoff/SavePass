import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import {
  Icon,
  Label,
  Error,
  Container,
  FormInput,
  InputContainer,
  ToggleShowPassButton,
} from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  title: string;
  error: string;
  control: Control;
}

export function Input(props: InputProps) {
  const { name, title, error, control, secureTextEntry, ...rest } = props;
  const [passwordHidden, setPasswordHidden] = useState(true);

  const SecureTextEntry = () => (
    <ToggleShowPassButton onPress={() => setPasswordHidden(!passwordHidden)}>
      <Icon name={passwordHidden ? "eye-off" : "eye"} />
    </ToggleShowPassButton>
  );

  return (
    <Container>
      <Label>{title}</Label>
      {!!error && <Error>{error}</Error>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputContainer>
            <FormInput
              {...rest}
              value={value}
              onChangeText={onChange}
              secureTextEntry={!!secureTextEntry && passwordHidden}
            />

            {!!secureTextEntry && <SecureTextEntry />}
          </InputContainer>
        )}
      />
    </Container>
  );
}
