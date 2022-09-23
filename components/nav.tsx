import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav: NextPage = () => {
  const router = useRouter();

  const { data: session } = useSession();
  return (
    <nav className="w-screen border border-black p-4 flex justify-center gap-4 bg-white">
      <Link href={'/'}>
        <Button variant="outlined">Home</Button>
      </Link>

      {!session ? (
        <Button variant="outlined" onClick={() => signIn()}>
          Login
        </Button>
      ) : (
        <div className="flex items-center gap-3 bg-white p-4">
          <p>Welcome, {session?.user?.name}</p>
          <Link href={'/user/account'}>
            <Image
              src={session.user.image}
              width={'50px'}
              height={'50px'}
              className="rounded-full hover:cursor-pointer"
            />
          </Link>

          <Link href={'/user/account'}>
            <Button variant="outlined">Account Page</Button>
          </Link>
          <Button variant="outlined" onClick={() => signOut()}>
            Log Out
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
