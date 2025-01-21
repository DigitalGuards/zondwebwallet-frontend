import { useStore } from "@/stores/store";
import { ExtendedWalletAccount } from "@/utilities/walletEncryptionUtil";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/UI/Card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/UI/Form";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { Download, Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  hexSeed: z
    .string()
    .min(1, "Hex seed is required")
    .regex(/^0x[0-9a-fA-F]+$/, "Invalid hex seed format. Must start with '0x' followed by hex characters"),
});

interface ImportHexSeedFormProps {
  onAccountImported: (account: ExtendedWalletAccount) => void;
}

export const ImportHexSeedForm = ({ onAccountImported }: ImportHexSeedFormProps) => {
  const { zondStore } = useStore();
  const { zondInstance } = zondStore;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hexSeed: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    try {
      const account = zondInstance?.accounts.seedToAccount(formData.hexSeed) as ExtendedWalletAccount;
      
      if (!account) {
        throw new Error("Failed to create account from hex seed");
      }

      // Add hexSeed to the account
      account.hexSeed = formData.hexSeed;

      onAccountImported(account);
    } catch (error) {
      form.setError("hexSeed", {
        message: "Invalid hex seed",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Import with Hex Seed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <FormField
              control={control}
              name="hexSeed"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your hex seed (0x...)"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the hex seed from your wallet backup
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              Import Account
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
