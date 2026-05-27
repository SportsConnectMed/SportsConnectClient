import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";

import { ChevronDown, Check, ChevronUp } from "lucide-react-native";

type SelectOption<T = string> = {
  label: string;
  value: T;
};

type SelectProps<T = string> = {
  label?: string;
  placeholder?: string;
  options: SelectOption<T>[];

  value: T | null;
  onChange: (value: T) => void;

  error?: string;

  disabled?: boolean;
};

export function Select<T = string>({
  label,
  placeholder = "Select an option",
  options,
  value,
  onChange,
  error,
  disabled,
}: SelectProps<T>) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <View className="gap-2">
      {label && (
        <Text className="text-sm font-medium text-muted-foreground">
          {label}
        </Text>
      )}

      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        className={`
          flex-row items-center justify-between
          rounded-2xl border border-border
          bg-secondary px-4 py-4
          active:opacity-80
          ${disabled ? "opacity-50" : ""}
        `}
      >
        <Text
          className={
            selectedOption ? "text-foreground" : "text-muted-foreground"
          }
        >
          {selectedOption?.label ?? placeholder}
        </Text>
        {open ? (
          <ChevronUp size={20} color="#888" className="rotate-180" />
        ) : (
          <ChevronDown size={20} color="#888" />
        )}
      </Pressable>

      {error && <Text className="text-sm text-red-500">{error}</Text>}

      <Modal visible={open} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setOpen(false)}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            className="
              bg-background
              rounded-t-3xl
              p-6
              max-h-[70%]
            "
          >
            <Text className="text-xl font-bold text-foreground mb-4">
              {label ?? "Select"}
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="gap-2">
                {options.map((option) => {
                  const isSelected = option.value === value;

                  return (
                    <Pressable
                      key={String(option.value)}
                      onPress={() => {
                        onChange(option.value);
                        setOpen(false);
                      }}
                      className={`
                        flex-row items-center justify-between
                        rounded-2xl px-4 py-4
                        ${isSelected ? "bg-primary/20" : "bg-card"}
                      `}
                    >
                      <Text
                        className={
                          isSelected
                            ? "text-primary font-semibold"
                            : "text-foreground"
                        }
                      >
                        {option.label}
                      </Text>

                      {isSelected && <Check size={18} color="#45cd55" />}
                    </Pressable>
                  );
                })}
              </View>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
