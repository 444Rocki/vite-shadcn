import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Link } from "react-router-dom";
import { Field } from "@/components/ui/field";
import { Mail } from "lucide-react";

export function ForgotPasswordPage() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Forgot your password?</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your
          password
        </CardDescription>
        <CardAction>
          <Link
            to={"/"}
            className={buttonVariants({ variant: "link", size: "sm" })}>
            Back to Login
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Field className='max-w-sm'>
                <InputGroup>
                  <InputGroupInput
                    id='inline-end-input'
                    type='email'
                    placeholder='Enter email'
                  />
                  <InputGroupAddon align='inline-end'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full hover:bg-transparent cursor-pointer'>
                      <Mail />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <Button
          className='w-full'
          onClick={() => console.log("Reset password")}>
          Reset Password
        </Button>
      </CardFooter>
    </Card>
  );
}