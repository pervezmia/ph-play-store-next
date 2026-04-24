"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
    const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const usersData = Object.fromEntries(fromData.entries());
    console.log(usersData);
    const { email, password } = usersData;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    console.log("response of fromData in signIn page", { data, error });
    if (error) {
      toast.error("Something is wrong!");
    }
    if (data) {
      toast.success("Sign up successfully!");
      router.push("/");
    }
  };
  return (
    <div>
      <h1>This is sign in page</h1>
      <div>
        <Form
          className="flex w-96 flex-col gap-4 mx-auto p-10 border rounded-2xl"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
