import React from 'react'
import { useForm } from 'react-hook-form'
import { isToken, User } from '../../_recoil/state'
import FormErrorMessage from '../../components/error/formErrorMessage'
import { LOGIN } from '../../_axios/user'
import { useSetRecoilState } from 'recoil'

const socialImage = [
  {
    path: '/images/google.png',
    alt: 'social-google',
  },
  {
    path: '/images/kakao.png',
    alt: 'social-kakao',
  },
  {
    path: '/images/naver.png',
    alt: 'social-naver',
  },
]

interface ILogin {
  onToggle: () => void
}

function Login({ onToggle }: ILogin) {
  const setToken = useSetRecoilState(isToken)

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, 'email' | 'password'>>({ mode: 'onChange' })

  const onSubmit = async () => {
    try {
      const form = getValues()
      const {
        data: { access, token, error },
      } = await LOGIN(form)
      if (!access) {
        console.log(error)
      }
      window.localStorage.setItem('access_token', token)
      setToken(!!window.localStorage.getItem('access_token'))
      reset()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="w-1/2 h-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-4 gap-2"
      >
        <label>
          <h1>Email</h1>
          <input
            {...register('email', {
              required: 'You must specify a email',
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: 'Please insert a valid email address',
              },
            })}
            className="text_input"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email (ex: thepro@gmail.com)"
          />
        </label>
        <section>
          {errors.email && errors.email.message && (
            <FormErrorMessage message={errors.email.message} />
          )}
        </section>

        <label>
          <h1>Password</h1>
          <input
            {...register('password', {
              required: 'You must specify a password',
              pattern: {
                value: /(?=.*\d)(?=.*[a-z]).{8,}/,
                message: 'Please insert a valid password',
              },
            })}
            className="text_input"
            type="password"
            name="password"
            id="password"
            placeholder="Password (8~20 char)"
          />
        </label>
        <section>
          {errors.password && errors.password.message && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </section>

        <button className="submit_btn" type="submit">
          LOGIN
        </button>
      </form>

      <button className="toggle_link" type="button" onClick={onToggle}>
        REGISTER
      </button>

      <div className="flex justify-evenly mt-8">
        {socialImage.map((logo, index) => (
          <img
            className="w-16 h-16 drop-shadow-2xl cursor-pointer"
            key={index}
            src={logo.path}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default Login
