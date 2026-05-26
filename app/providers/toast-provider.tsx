import Toast from "react-native-toast-message";
import { toastConfig } from "../config/toast.config";

interface Props {
  children: React.ReactNode;
}

export function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <Toast config={toastConfig} position="bottom" topOffset={60} />
    </>
  );
}
