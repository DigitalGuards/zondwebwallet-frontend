import { Button } from "../../../../UI/Button";
import { ROUTES } from "../../../../../router/router";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const NewAccount = () => {
  return (
    <Link to={ROUTES.HOME} state={{ hasAccountCreationPreference: true }}>
      <Button className="flex w-full gap-2">
        <Plus size={18} /> Create or import an account
      </Button>
    </Link>
  );
};
