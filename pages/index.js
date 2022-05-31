import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Link href="/api/auth/login">
        <a>
          <button>Login</button>
        </a>
      </Link>
      <Link href="/api/auth/logout">
        <a>
          <button>Logout</button>
        </a>
      </Link>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  )
}
