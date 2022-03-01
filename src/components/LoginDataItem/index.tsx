import React, { useState } from "react";

import {
  Icon,
  Email,
  Title,
  PassData,
  Password,
  Container,
  LoginData,
  BoldTitle,
  ShowPasswordButton,
} from "./styles";

interface LoginDataItemProps {
  email: string;
  password: string;
  service_name: string;
}

export function LoginDataItem(props: LoginDataItemProps) {
  const { service_name, email, password } = props;
  const [passIsVisible, setPassIsVisible] = useState(false);

  function handleTogglePassIsVisible() {
    setPassIsVisible(!passIsVisible);
  }

  function PassIsVisible() {
    if (passIsVisible) {
      return (
        <PassData>
          <Title>{service_name}</Title>
          <Password>{password}</Password>
        </PassData>
      );
    }

    return (
      <LoginData>
        <BoldTitle>{service_name}</BoldTitle>
        <Email>{email}</Email>
      </LoginData>
    );
  }

  return (
    <Container colors={[passIsVisible ? "#EBF2FF" : "#ffffff", "#ffffff"]}>
      <ShowPasswordButton onPress={handleTogglePassIsVisible}>
        <Icon
          name={passIsVisible ? "eye" : "eye-off"}
          color={passIsVisible ? "#1967FB" : "#888D97"}
        />
      </ShowPasswordButton>

      <PassIsVisible />
    </Container>
  );
}
