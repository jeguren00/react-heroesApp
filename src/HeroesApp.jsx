import { AuthProvieder } from "./auth/context/AuthProvieder";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvieder>
      <AppRouter />
    </AuthProvieder>
  );
};
