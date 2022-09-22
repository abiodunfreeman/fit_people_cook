import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/nav';
const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for Fit People Cook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-500 min-h-screen">
        <Nav />
        <h1 className="text-center text-3xl font-extrabold">Sign UP</h1>
      </main>
    </div>
  );
};

export default SignUp;
