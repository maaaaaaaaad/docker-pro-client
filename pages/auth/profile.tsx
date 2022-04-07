import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { USER } from '../../_axios/user'
import { useRecoilState } from 'recoil'
import { userState } from '../../_recoil/state'
import SearchBtn from '../../components/inputs/searchBtn'
import ProfileUpdateForm from '../../components/form/profileUpdateForm'
import ProfileImageForm from '../../components/form/profileImageForm'

function Profile() {
  const router = useRouter()
  const [user, setUser] = useRecoilState(userState)
  const [updateFormToggle, setUpdateFormToggle] = useState<boolean>(false)

  const authentication = useCallback(async () => {
    const api = await USER()
    if (!api) {
      return await router.push('/auth/sign')
    }
    return setUser(api.data)
  }, [])

  useEffect(() => {
    authentication()
  }, [])

  const goHome = async () => await router.push('/')

  const onToggleUpdateForm = () => setUpdateFormToggle((prev) => !prev)
  return (
    <section className="w-full h-full">
      {user && (
        <section className="overflow-y-scroll w-full h-full">
          <header className="w-full">
            <section className="p-2 flex justify-evenly items-center items-center lg:justify-evenly">
              <article className="flex items-center">
                <h1 onClick={goHome} className="text-5xl mr-8 cursor-pointer">
                  PRO
                </h1>
                <SearchBtn />
              </article>

              <article className="flex items-center">
                <div className="mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
              </article>
            </section>
          </header>

          <main className="mt-8 w-full flex justify-center items-center flex-col">
            <section className="w-full flex justify-center items-center">
              <ProfileImageForm avatarImage={user.avatarImage} />

              <article className="ml-12">
                <div className="mb-4 text-2xl font-bold flex items-center">
                  <h2>{user.nickname}</h2>
                  <button
                    onClick={onToggleUpdateForm}
                    className="h-6 w-6 ml-2 cursor-pointer"
                  >
                    {updateFormToggle ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <h2>
                  CREATE AT:{' '}
                  {new Date(user.createAt!).toLocaleString('ko-KR', {
                    hour12: true,
                  })}
                </h2>
                <h2>
                  UPDATE AT:{' '}
                  {new Date(user.updateAt!).toLocaleString('ko-KR', {
                    hour12: true,
                  })}
                </h2>
              </article>
            </section>

            {updateFormToggle && (
              <section className="mt-8">
                <ProfileUpdateForm />
              </section>
            )}
          </main>
        </section>
      )}
    </section>
  )
}

export default Profile
