import { getUser } from '@/lib/auth'
// import Image from 'next/image'
import { User } from 'lucide-react'

export function Profile() {
  const { name } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      {/* <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      /> */}
      <User className="h-5 w-5 text-gray-500" />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-200"
        >
          Quero Sair
        </a>
      </p>
    </div>
  )
}
