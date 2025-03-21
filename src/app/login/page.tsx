import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" name="firstName" type="text" required />
      <label htmlFor="middleName">Middle Name:</label>
      <input id="middleName" name="middleName" type="text" required />
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="tet" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}