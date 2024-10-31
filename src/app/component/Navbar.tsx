import React from 'react'
import { auth, signIn, signOut } from '../../../auth'
import Link from 'next/link'

const Navbar = async () => {

    const session = await auth()
    return (
        <header>
            <nav className='flex justify-between items-center py-4 '>

                <div className='font-bold'>

                    <span>Think<span className='text-[#F9B526]'>r </span></span>
                </div>

                <div className='flex items-center gap-5'>
                    {session?.user ?
                        <div>

                            <Link href={'/startup/create'}> Create</Link>
                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo: '/'});
                            }}>
                                <button type='submit'> Log Out</button>
                            </form>

                            <Link href={`/user/${session?.user.id}`}> {session?.user?.name}</Link>

                        </div>
                        : <form action={async () => {
                            "use server";

                            await signIn();
                        }}>
                            <button type='submit' className='btn btn-sm text-sm font-bold border-2'> Log In</button>
                        </form>
                    }

                </div>


            </nav>




        </header>
    )
}

export default Navbar