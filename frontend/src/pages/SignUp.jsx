import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main className='min-h-screen mt-20'>
      {/* Section: split screen */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-3 max-w-3xl mx-auto'>
        {/* left */}
        <div className=''>
          <Link to='/'
            className='font-bold dark:text-white text-4xl'>
            SignUp
          </Link>
          <p className='text-sm mt-5'>Welcome to my portfolio site.
            Please sign up if you&apos;d like to subscribe to my blog or leave comments on a particular post.
          </p>
        </div>
        {/* right */}
        <div>
          <form className='space-y-3'>
            <div>
              <Label value="Username" />
              <TextInput type='text' placeHolder='JDoe42' id='username'/>
            </div>
            <div>
              <Label value="First Name" />
              <TextInput type='text' placeHolder='John' id='firstname'/>
            </div>
            <div>
              <Label value="Email" />
              <TextInput type='email' placeHolder='john.doe@gmail.com' id='email'/>
            </div>
            <div>
              <Label value="Password" />
              <TextInput type='password' id='password'/>
            </div>
            <div>
              <Button type='submit' gradientMonochrome="teal">Sign Up</Button>
            </div>
          </form>
          <div className='mt-2'>
            <p>Already have an account?
              <span className='text-teal-900'>
                <Link to='/sign-in'> Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Section: split screen */}
    </main>
  )
}
