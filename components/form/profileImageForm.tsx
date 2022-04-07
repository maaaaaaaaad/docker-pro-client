import React, { ChangeEvent, useRef, useState } from 'react'
import { UPLOAD_IMAGE } from '../../_axios/user'

interface IProfileImageForm {
  avatarImage: string | null | undefined
}

function ProfileImageForm({ avatarImage }: IProfileImageForm) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [imageBase64, setImgBase64] = useState<string | null>(null)
  const [imageFile, setImgFile] = useState<File | null>(null)

  const onClick = () => {
    fileRef.current?.click()
  }

  const onCancelPreviewImage = () => {
    setImgBase64(null)
  }

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files) {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        const base64 = fileReader.result
        if (base64) {
          setImgBase64(base64.toString())
        }
      }

      if (files[0]) {
        fileReader.readAsDataURL(files[0])
        setImgFile(files[0])
      }
    }
  }

  const onSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const imageFormData = new FormData()
    imageFile && imageFormData.append('image', imageFile)
    const {
      data: { access, message },
    } = await UPLOAD_IMAGE(imageFormData)
    if (!access) {
      window.alert(message)
      return
    }
    window.alert(message)
  }

  return (
    <section>
      {imageBase64 ? (
        <div className="w-64 h-64 p-0 m-0 relative">
          <img
            className="w-full h-full rounded-full"
            src={imageBase64}
            alt="image-preview"
          />
          <article className="absolute top-2 center">
            <form className="m-0 p-0" onSubmit={onSubmit}>
              <button type="submit">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </form>
            <button onClick={onCancelPreviewImage}>
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
            </button>
          </article>
        </div>
      ) : (
        <div onClick={onClick} className="p-0 m-0 cursor-pointer">
          <img
            className="rounded-full w-64 h-64 hover:opacity-60"
            src={avatarImage ?? '/images/user.png'}
            alt="avatar-image"
          />
        </div>
      )}
      <input
        onChange={onChange}
        ref={fileRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
      />
    </section>
  )
}

export default ProfileImageForm
