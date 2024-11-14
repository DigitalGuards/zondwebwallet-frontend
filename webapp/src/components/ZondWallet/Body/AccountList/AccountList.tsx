import { ActiveAccount } from "./ActiveAccount/ActiveAccount";
import { NewAccount } from "./NewAccount/NewAccount";
import { OtherAccounts } from "./OtherAccounts/OtherAccounts";

const AccountList = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <NewAccount />
      <div className="flex flex-col gap-4">
        <ActiveAccount />
        <OtherAccounts />
      </div>
    </div>
  );
};

export default AccountList;
