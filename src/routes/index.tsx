import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./Auth.Routes";
import React from "react";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
