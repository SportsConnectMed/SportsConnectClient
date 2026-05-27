import { useAuthStore } from "@/modules/auth/store/auth.store";
import HomeHeader from "../components/home-header";
import { Screen } from "@/shared/screen";

export function HomeScreen() {
  return (
    <Screen>
      <HomeHeader />
    </Screen>
  );
}
