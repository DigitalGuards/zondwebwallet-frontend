import { Button } from "../../../../UI/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../UI/Card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../UI/Form";
import { Input } from "../../../../UI/Input";
import { useStore } from "../../../../../stores/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Web3BaseWalletAccount } from "@theqrl/web3";
import { Loader, Plus } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    reEnteredPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((fields) => fields.password === fields.reEnteredPassword, {
    message: "Passwords don't match",
    path: ["reEnteredPassword"],
  });

type AccountCreationFormProps = {
  onAccountCreated: (account?: Web3BaseWalletAccount) => void;
};

export const AccountCreationForm = observer(
  ({ onAccountCreated }: AccountCreationFormProps) => {
    const { zondStore } = useStore();
    const { zondInstance } = zondStore;

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      mode: "onChange",
      reValidateMode: "onSubmit",
      defaultValues: {
        password: "",
        reEnteredPassword: "",
      },
    });
    const {
      handleSubmit,
      control,
      formState: { isSubmitting, isValid },
    } = form;

    async function onSubmit(formData: z.infer<typeof FormSchema>) {
      try {
        const userPassword = formData.password;
        console.log("Password to be used for encryption:", userPassword);
        // use this password for hexseed and account encryption when supported

        const newAccount = await zondInstance?.accounts.create();
        onAccountCreated(newAccount);
      } catch (error) {
        control.setError("reEnteredPassword", {
          message: `${error} There was an error while creating the account`,
        });
      }
    }

    return (
      <Form {...form}>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Create new account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter a password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="reEnteredPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isSubmitting}
                        placeholder="Re-enter the password"
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>Re-enter the password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button
                disabled={isSubmitting || !isValid}
                className="w-full"
                type="submit"
              >
                {isSubmitting ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="mr-2 h-4 w-4" />
                )}
                Create account
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    );
  }
);
