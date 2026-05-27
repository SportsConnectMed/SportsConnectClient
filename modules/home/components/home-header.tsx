import { Pressable, Text, View } from "react-native";
import { getCurrentHour } from "../utils/get-current-hour";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { Bell, MapPin } from "lucide-react-native";

export default function HomeHeader() {
  const { user } = useAuthStore();

  return (
    <View className="px-4 py-2 flex-row">
      <View className="flex-1 flex-col gap-1">
        <Text className="text-md font-normal text-muted-foreground">
          {getCurrentHour()}, {user?.username}
        </Text>
        <Text className="text-xl font-bold text-foreground">
          Encuentra tu partido
        </Text>
      </View>

      <View className="flex-row items-center gap-3">
        <Pressable
          className="
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-secondary
            border
            border-border
            "
        >
          <MapPin size={20} color="#9CA3AF" />
        </Pressable>

        <Pressable
          className="
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-secondary
      border
      border-border
      relative
    "
        >
          <Bell size={20} color="#9CA3AF" />

          {/* Badge */}
          <View
            className="
        absolute
        -top-1
        -right-1
        h-5
        w-5
        rounded-full
        bg-primary
        items-center
        justify-center
      "
          >
            <Text className="text-[10px] font-bold text-primary-foreground">
              3
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
