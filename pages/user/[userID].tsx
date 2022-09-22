import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/nav';
import { useSession, signOut } from 'next-auth/react';

import { useRouter } from 'next/router';
const UserHomePage: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { userID } = router.query;
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for Fit People Cook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green-500 min-h-screen">
        <Nav />
        <h1>Welcome, your ID is {userID}</h1>
      </main>
    </div>
  );
};

export default UserHomePage;
