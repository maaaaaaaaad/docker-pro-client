import React from 'react'
import { useForm } from 'react-hook-form'
import { User } from '../../_recoil/state'
import FormErrorMessage from '../error/formErrorMessage'
import { UPDATE } from '../../_axios/user'
import { useRouter } from 'next/router'

type UpdateProfileForm = Pick<User, 'nickname' | 'password'> & {
  confirmPassword: string
}

function ProfileUpdateForm() {
  const router = useRouter()

  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileForm>({
    mode: 'onChange',
  })

  const onSubmit = async () => {
    if (!getValues().nickname && !getValues().password) {
      window.alert('Please you enter nickname or password')
      return
    }
    const { confirmPassword, ...form } = getValues()
    const {
      data: { access, message, user },
    } = await UPDATE(form)
    if (!access) {
      window.alert(message)
      return
    }
    window.alert(message)
    window.localStorage.removeItem('access_token')
    await router.push('/auth/sign')
    return
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="register grid grid-rows-6 gap-1"
    >
      <label>
        <h2 className="text-lg">Nickname</h2>
        <input
          {...register('nickname', {
            required: false,
            pattern: {
              value: /^[A-za-z0-9]{2,12}$/,
              message: 'Please insert a valid nickname',
            },
          })}
          type="text"
          name="nickname"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 lg:w-96"
          placeholder="Nickname"
          autoComplete="off"
        />
      </label>
      <section>
        {errors.nickname && errors.nickname.message && (
          <FormErrorMessage message={errors.nickname.message} />
        )}
      </section>

      <label>
        <h2 className="text-lg">Password</h2>
        <input
          {...register('password', {
            required: false,
            pattern: {
              value: /(?=.*\d)(?=.*[a-z]).{8,}/,
              message: 'Please insert a valid password',
            },
          })}
          type="password"
          name="password"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 lg:w-96"
          placeholder="Password"
        />
      </label>
      <section>
        {errors.password && errors.password.message && (
          <FormErrorMessage message={errors.password.message} />
        )}
      </section>

      <label>
        <h2 className="text-lg">Confirm Password</h2>
        <input
          {...register('confirmPassword', {
            validate: (v) =>
              v === watch('password') || 'The passwords do not match',
          })}
          type="password"
          name="confirmPassword"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 lg:w-96"
          placeholder="Confirm Password"
        />
      </label>
      <section>
        {errors.confirmPassword && errors.confirmPassword.message && (
          <FormErrorMessage message={errors.confirmPassword.message} />
        )}
      </section>

      <button className="submit_btn" type="submit">
        UPDATE
      </button>
    </form>
  )
}

export default ProfileUpdateForm
