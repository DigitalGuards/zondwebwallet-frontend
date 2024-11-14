import { Button } from "../../../../UI/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../UI/Card";
import { ROUTES } from "../../../../../router/router";
import StringUtil from "../../../../../utilities/stringUtil";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Web3BaseWalletAccount } from "@theqrl/web3";

interface AccountImportSuccessProps {
  account?: Web3BaseWalletAccount;
}

const AccountImportSuccess = ({ account }: AccountImportSuccessProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="h-6 w-6 text-green-500" />
          Account imported successfully
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">Account address</span>
          <span className="break-all text-sm">
            {account?.address && StringUtil.getSplitAddress(account.address)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link className="w-full" to={ROUTES.HOME}>
          <Button className="w-full" type="button">
            Go to home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AccountImportSuccess;
