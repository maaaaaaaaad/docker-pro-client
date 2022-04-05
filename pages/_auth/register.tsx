import React from 'react'
import FormErrorMessage from '../../components/error/formErrorMessage'
import { User } from '../../_recoil/state'
import { useForm } from 'react-hook-form'
import { REGISTER } from '../../_axios/user'

interface IRegister {
  onToggle: () => void
}

type RegisterForm = Pick<
  User,
  'email' | 'password' | 'avatarImage' | 'nickname'
> & {
  confirmPassword: string
}

function Register({ onToggle }: IRegister) {
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: 'onChange',
  })

  const onSubmit = async () => {
    try {
      const values = getValues()
      const { confirmPassword, ...form } = values
      const {
        data: { access, success, error },
      } = await REGISTER(form)
      if (!access) {
        return window.alert(error)
      }
      window.alert(success)
      return onToggle()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="w-1/3 h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="register grid grid-rows-8 gap-2"
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

        <label>
          <h1>Confirm Password</h1>
          <input
            {...register('confirmPassword', {
              validate: (v) =>
                v === watch('password') || 'The passwords do not match',
            })}
            className="text_input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        <section>
          {errors.confirmPassword && errors.confirmPassword.message && (
            <FormErrorMessage message={errors.confirmPassword.message} />
          )}
        </section>

        <label>
          <h1>Nickname</h1>
          <input
            {...register('nickname', {
              required: 'You must specify a nickname',
              pattern: {
                value: /^[A-za-z0-9]{2,12}$/,
                message: 'Please insert a valid nickname',
              },
            })}
            className="text_input"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Nickname (2~12 char)"
          />
        </label>
        <section>
          {errors.nickname && errors.nickname.message && (
            <FormErrorMessage message={errors.nickname.message} />
          )}
        </section>

        <button className="submit_btn" type="submit">
          REGISTER
        </button>
      </form>

      <button className="toggle_link" type="button" onClick={onToggle}>
        LOGIN
      </button>
    </section>
  )
}

export default Register
