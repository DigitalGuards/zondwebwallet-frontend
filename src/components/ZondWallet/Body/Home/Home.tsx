import withSuspense from "../../../../functions/withSuspense";
import { useStore } from "../../../../stores/store";
import { Loader, Send } from "lucide-react";
import { observer } from "mobx-react-lite";
import { lazy } from "react";
import ConnectionFailed from "./ConnectionFailed/ConnectionFailed";
import { SEO } from "../../../SEO/SEO";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";
import { ROUTES } from "@/router/router";
import { ActiveAccountDisplay } from "./AccountCreateImport/ActiveAccountDisplay/ActiveAccountDisplay";
import { cva } from "class-variance-authority";
import { useLocation, Link } from "react-router-dom";

const AccountCreateImport = withSuspense(
  lazy(() => import("./AccountCreateImport/AccountCreateImport"))
);
const BackgroundVideo = withSuspense(
  lazy(() => import("./BackgroundVideo/BackgroundVideo"))
);
const ConnectionBadge = withSuspense(
  lazy(() => import("./ConnectionBadge/ConnectionBadge"))
);

const TokenForm = withSuspense(
  lazy(() => import("../Tokens/TokenForm/TokenForm"))
);

const Home = observer(() => {
  const { state } = useLocation();
  const { zondStore } = useStore();
  const { zondConnection, activeAccount } = zondStore;
  const { isLoading, isConnected } = zondConnection;
  const hasAccountCreationPreference = !!state?.hasAccountCreationPreference;

  const accountCreateImportClasses = cva("flex gap-8", {
    variants: {
      hasAccountCreationPreference: {
        true: ["flex-col-reverse"],
        false: ["flex-col"],
      },
    },
    defaultVariants: {
      hasAccountCreationPreference: false,
    },
  });

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to the QRL Zond Web3 Wallet. Create or import your quantum-resistant wallet and start managing your QRL assets securely."
        keywords="QRL Wallet, Create Wallet, Import Wallet, Quantum Resistant, Web3"
      />
      <BackgroundVideo />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-2 md:gap-4 md:py-4">
        <img className="h-14 md:h-20" src="/logo.png" alt="MyQRLWallet Logo" />
        {isLoading ? (
          <Loader className="animate-spin text-foreground" size={32} />
        ) : (
          <>
            <ConnectionBadge />


            <div
              className={accountCreateImportClasses({ hasAccountCreationPreference })}
            >
              {activeAccount.accountAddress && (
                <>
                  <Card className="w-full relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                      >
                        <source src="qrl-video-dark.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="relative z-10">
                      <CardHeader>
                        <CardTitle>Active account</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ActiveAccountDisplay />
                      </CardContent>
                      <CardFooter className="justify-end">
                        <Link className="w-full" to={ROUTES.ACCOUNT_DETAILS}>
                          <Button className="w-full" type="button">
                            <Send className="mr-2 h-4 w-4" />
                            Send Quanta
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </Card>
                  <div className="relative z-10">
                    <TokenForm />
                  </div>
                </>
              )}
              {isConnected ? <AccountCreateImport /> : <ConnectionFailed />}
            </div>
          </>
        )}
      </div>
    </>
  );
});

export default Home;
