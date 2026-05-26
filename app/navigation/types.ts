import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;

  Register: undefined;

  ForgotPassword: undefined;
};

export type AppStackParamList = {
  Home: undefined;
};

export type Navigation = NativeStackNavigationProp<AuthStackParamList>;
