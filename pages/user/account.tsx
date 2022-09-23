import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/nav';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignUp: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  });
  if (session) {
    return (
      <div>
        <Head>
          <title>Fit People Cook</title>
          <meta name="description" content="Sign up for Fit People Cook" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-blue-500 min-h-screen">
          <Nav />
          <div className="font-bold text-4xl text-center">
            Welcome to your homepage {session.user.name}
          </div>
        </main>
      </div>
    );
  } else {
    return <div>You are not signed in</div>;
  }
};

export default SignUp;
