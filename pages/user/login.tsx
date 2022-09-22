import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/nav';
const Login: NextPage = () => {
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
      </main>
    </div>
  );
};

export default Login;
