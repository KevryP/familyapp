import { createClient } from '../../utils/supabase/server'
import Dashboard from './dashboard'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <Dashboard user={user} />
}