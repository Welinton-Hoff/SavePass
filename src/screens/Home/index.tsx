import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { LoginDataItem } from "../../components/LoginDataItem";

import {
  Title,
  Metadata,
  LoginList,
  Container,
  TotalPassCount,
} from "./styles";

interface LoginDataProps {
  id: string;
  email: string;
  password: string;
  service_name: string;
}

type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<LoginListDataProps>([]);
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);

  const countPass = searchListData.length
    ? `${`${searchListData.length}`.padStart(2, "0")} ao total`
    : "Nada a ser exibido";
  const userLoged = {
    name: "Rocketseat",
    avatar_url: "https://i.ibb.co/ZmFHZDM/rocketseat.jpg",
  };

  async function loadData() {
    const dataKey = "@savepass:logins";
    const response = await AsyncStorage.getItem(dataKey);

    if (response) {
      const data = JSON.parse(response);

      setData(data);
      setSearchListData(data);
    }
  }

  function handleFilterLoginData() {
    const filterData = searchListData.filter((item) => {
      const hasValidFilter = item.service_name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      if (hasValidFilter) {
        return item;
      }
    });

    setSearchListData(filterData);
  }

  function handleChangeInputText(text: string) {
    if (!text) {
      setSearchListData(data);
    }

    setSearchText(text);
  }

  function renderItem({ item: loginData }) {
    return (
      <LoginDataItem
        service_name={loginData.service_name}
        email={loginData.email}
        password={loginData.password}
      />
    );
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <>
      <Header user={userLoged} />
      <Container>
        <SearchBar
          value={searchText}
          returnKeyType="search"
          onChangeText={handleChangeInputText}
          placeholder="Qual senha você procura?"
          onSubmitEditing={handleFilterLoginData}
          onSearchButtonPress={handleFilterLoginData}
        />

        <Metadata>
          <Title>Suas senhas</Title>
          <TotalPassCount>{countPass}</TotalPassCount>
        </Metadata>

        <LoginList
          data={searchListData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </>
  );
}
