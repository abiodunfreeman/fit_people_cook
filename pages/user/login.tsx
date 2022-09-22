import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import Nav from '../../components/nav';
import { Button } from '@mui/material';
import Image from 'next/image';
const Login: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <main className="bg-purple-500 min-h-screen">
          <Nav />
          <div className="flex items-center gap-3">
            <h1>Welcome, {session.user.name} </h1>
            <Image
              src={session.user.image}
              width={'100px'}
              height={'100px'}
              className="rounded-full"
            />
          </div>
          <Button onClick={() => signOut()} variant="contained">
            Sign Out
          </Button>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Sign Up</title>
          <meta name="description" content="Sign up for Fit People Cook" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-purple-500 min-h-screen">
          <Nav />
          <h1 className="text-center text-3xl font-extrabold">Login</h1>
          <Button onClick={() => signIn()} variant="contained">
            Sign In
          </Button>
        </main>
      </div>
    );
  }
};

export default Login;
