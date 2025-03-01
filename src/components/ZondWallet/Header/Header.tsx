import withSuspense from "../../../functions/withSuspense";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { lazy } from "react";

const ZondWalletLogo = withSuspense(
  lazy(() => import("./ZondWalletLogo/ZondWalletLogo"))
);
const AccountBadge = withSuspense(
  lazy(() => import("./AccountBadge/AccountBadge"))
);
const NavBar = withSuspense(
  lazy(() => import("./NavBar/NavBar"))
)

const Header = observer(() => {
  const { zondStore } = useStore();
  const { zondConnection } = zondStore;
  const { isConnected } = zondConnection;

  return (
    <div className="fixed top-0 z-20 flex h-16 w-full items-center justify-between border-b-2 border-secondary bg-background px-4">
      <ZondWalletLogo />
      <div className="flex gap-4 items-center">
        <NavBar />
        {isConnected && <AccountBadge />}
      </div>
    </div>
  );
});

export default Header;
