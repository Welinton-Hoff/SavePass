import React from "react";
import * as Yup from "yup";
import uuid from "react-native-uuid";
import { Platform } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";

import { Container, Form, KeyboardView, SalveButton } from "./styles";

interface FormData {
  email: string;
  password: string;
  service_name: string;
}

const schema = Yup.object().shape({
  service_name: Yup.string().required("Nome do serviço é obrigatório!"),
  email: Yup.string()
    .email("Não é um email válido")
    .required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
});

export function RegisterLoginData() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const keyboardBehavior = Platform.OS === "ios" ? "padding" : undefined;

  async function handleRegister(formData: FormData) {
    const newLoginData = {
      id: String(uuid.v4()),
      ...formData,
    };

    const dataKey = "@savepass:logins";
    const response = await AsyncStorage.getItem(dataKey);
    const data = JSON.parse(response) || [];

    const newLoginList = [...data, newLoginData];
    await AsyncStorage.setItem(dataKey, JSON.stringify(newLoginList));

    navigate("Home");
  }

  return (
    <KeyboardView behavior={keyboardBehavior} enabled>
      <Header />
      <Container>
        <Form>
          <Input
            autoCorrect
            control={control}
            name="service_name"
            title="Nome do serviço"
            autoCapitalize="sentences"
            testID="service-name-input"
            error={errors.service_name && errors.service_name.message}
          />
          <Input
            name="email"
            title="E-mail"
            control={control}
            autoCorrect={false}
            testID="email-input"
            autoCapitalize="none"
            keyboardType="email-address"
            error={errors.email && errors.email.message}
          />
          <Input
            title="Senha"
            name="password"
            secureTextEntry
            control={control}
            testID="password-input"
            error={errors.password && errors.password.message}
          />

          <SalveButton title="Salvar" onPress={handleSubmit(handleRegister)} />
        </Form>
      </Container>
    </KeyboardView>
  );
}
