import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ContainerView = styled.View`
  flex: 1;
  padding: 0px 10px;
  justify-content: center;
`;

export const MobileLoginView = styled.View`
  margin: 15px 10px;
  background-color:transparent
  border-radius: 5px;
  padding: 20px 10px;
  min-height: 200px;
`;
export const InputContainerView = styled.View`
  flex-direction: row;
  padding-bottom: 30px;
`;
export const InputItemView = styled.View`
  flex: ${props => props.flex};
  border-bottom-width: 1px;

  padding-bottom: 0px;
`;
