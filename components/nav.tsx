import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@mui/material';
const Nav: NextPage = () => {
  return (
    <nav className="w-screen border border-black p-4 flex justify-center gap-4">
      <Link href={'/'}>
        <Button variant="outlined">Home</Button>
      </Link>
      <Link href={'/user/signup'}>
        <Button variant="outlined">Sign Up</Button>
      </Link>
      <Link href={'/user/login'}>
        <Button variant="outlined">Login</Button>
      </Link>
    </nav>
  );
};

export default Nav;
