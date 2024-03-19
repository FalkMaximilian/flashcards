import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Login() {
  return (
    <div className=" h-svh pt-20 px-4 pb-4">
      <div className="h-full grid place-items-center">
        <Tabs defaultValue="login" className="w-full md:w-8/12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Provide your username and password to log in.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" defaultValue="Himbeere-Malina" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input type="password" id="username" defaultValue="Test123" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Provide a username and a password to register. The password has to be entered twice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" defaultValue="Himbeere-Malina" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="pwd1">Password</Label>
                  <Input type="password" id="pwd1" defaultValue="Test123" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="pwd2">Repeat password</Label>
                  <Input type="password" id="pwd2" defaultValue="Test123" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Register</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
