import { ReactNode, useState } from "react";

import {
  Pressable,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react-native";

type InputType = "text" | "email" | "password" | "number";

interface Props<T extends FieldValues> extends TextInputProps {
  control: Control<T>;

  name: FieldPath<T>;

  label?: string;

  placeholder?: string;

  icon?: ReactNode;

  type?: InputType;
}

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  icon,
  type = "text",
  ...props
}: Props<T>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = type === "password";

  const getKeyboardType = (): KeyboardTypeOptions => {
    switch (type) {
      case "email":
        return "email-address";

      case "number":
        return "numeric";

      default:
        return "default";
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className="gap-2">
          {label && (
            <Text className="font-medium text-md text-muted-foreground">
              {label}
            </Text>
          )}

          <View
            className={`
              flex-row
              items-center
              rounded-2xl
              border
              px-4
              ${error ? "border-destructive" : "border-border"}
              bg-secondary
            `}
          >
            {icon && <View className="mr-3">{icon}</View>}

            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              keyboardType={getKeyboardType()}
              autoCapitalize="none"
              className="
                h-14
                flex-1
                font-regular
                text-foreground
                border-border
                placeholder:text-muted-foreground

              "
              {...props}
              secureTextEntry={isPasswordField ? !isPasswordVisible : false}
            />

            {isPasswordField && (
              <Pressable
                onPress={() => setIsPasswordVisible((current) => !current)}
                hitSlop={12}
                accessibilityRole="button"
                accessibilityLabel={
                  isPasswordVisible
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
                className="ml-3"
              >
                {isPasswordVisible ? (
                  <EyeOff size={20} color="#888" />
                ) : (
                  <Eye size={20} color="#888" />
                )}
              </Pressable>
            )}
          </View>

          {error && (
            <Text className="text-sm text-destructive">{error.message}</Text>
          )}
        </View>
      )}
    />
  );
}
