import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Icon,
  Title,
  Avatar,
  BoldText,
  Container,
  AboutUser,
  AddButton,
  BackButton,
  HelloMessage,
  TextContainer,
  SecondaryMessage,
} from "./styles";

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  };
}

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation();

  function handleAddPass() {
    navigate("RegisterLoginData");
  }

  function HasUser() {
    if (user) {
      return (
        <>
          <AboutUser>
            <Avatar source={{ uri: user.avatar_url }} />

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user.name}</BoldText>
              </HelloMessage>

              <SecondaryMessage>Sinta-se seguro aqui</SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <AddButton onPress={handleAddPass}>
            <Icon name="plus" color="#FFFFFF" size={24} />
          </AddButton>
        </>
      );
    }

    return (
      <>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" color="#1967FB" size={28} />
        </BackButton>

        <Title>Cadastro de senha</Title>
      </>
    );
  }

  return (
    <Container
      hasUserData={!!user}
      style={{
        ...(user
          ? {
              backgroundColor: "#1967FB",
            }
          : {
              backgroundColor: "#FFFFFF",
            }),
      }}
    >
      <HasUser />
    </Container>
  );
}
