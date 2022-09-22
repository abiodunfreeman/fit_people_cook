import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

const Nav: NextPage = () => {
  const { data: session } = useSession();
  return (
    <nav className="w-screen border border-black p-4 flex justify-center gap-4">
      <Link href={'/'}>
        <Button variant="outlined">Home</Button>
      </Link>

      {!session ? (
        <Button variant="outlined" onClick={() => signIn()}>
          Login
        </Button>
      ) : (
        <div className="flex items-center gap-3">
          <p>Welcome, {session?.user?.name}</p>
          <Button variant="outlined" onClick={() => signOut()}>
            Log Out
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
