import { CallingCard } from '@/components/calling-card'
import { DataBackground } from '@/components/data-background'

export default function Page() {
  return (
    <main className="relative isolate flex min-h-dvh items-center justify-center bg-muted px-4 py-12">
      <DataBackground />
      <div className="relative z-10 flex w-full justify-center">
        <CallingCard />
      </div>
    </main>
  )
}
