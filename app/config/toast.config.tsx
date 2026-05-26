import { BaseToast, ErrorToast, ToastConfig } from "react-native-toast-message";

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "oklch(0.7517 0.1898 143.58)",
        backgroundColor: "oklch(0.7517 0.1898 143.58)",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "oklch(0.7517 0.1898 143.58)",
        minHeight: 72,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      text1Style={{
        color: "oklch(0.98 0.0001 263.26)",
        fontSize: 15,
        fontFamily: "BeVietnamBold",
      }}
      text2Style={{
        color: "oklch(0.65 0.0001 263.32)",
        fontSize: 13,
        fontFamily: "BeVietnamMedium",
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "oklch(0.5577 0.2221 25.68)",
        backgroundColor: "oklch(0.1802 0.019 143.46)",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "oklch(0.2803 0.0285 143.45)",
        minHeight: 72,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      text1Style={{
        color: "oklch(0.98 0.0001 263.26)",
        fontSize: 15,
        fontFamily: "BeVietnamBold",
      }}
      text2Style={{
        color: "oklch(0.65 0.0001 263.32)",
        fontSize: 13,
        fontFamily: "BeVietnamMedium",
      }}
    />
  ),

  info: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "oklch(0.6497 0.145 159.94)",
        backgroundColor: "oklch(0.7517 0.1898 143.58)",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "oklch(0.7517 0.1898 143.58)",
        minHeight: 72,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      text1Style={{
        color: "oklch(0.98 0.0001 263.26)",
        fontSize: 15,
        fontFamily: "BeVietnamBold",
      }}
      text2Style={{
        color: "oklch(0.65 0.0001 263.32)",
        fontSize: 13,
        fontFamily: "BeVietnamMedium",
      }}
    />
  ),
};
