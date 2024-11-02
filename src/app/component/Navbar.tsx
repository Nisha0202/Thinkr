import React from 'react'
import { auth, signIn, signOut } from '../../../auth'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

const Navbar = async () => {

    const session = await auth()
    return (
        <header>
            <nav className=' flex justify-between items-center py-4 px-4 sm:px-6 mx-auto text-sm sm:text-base'>

                <div className='font-extrabold'>

                    <span>Think<span className='text-primary '>r</span></span>
                </div>

                <div className='flex items-center gap-5 '>
                    {session?.user ?
                        <div className='flex items-center gap-4'>
                            <Link href={`/user/${session?.user.id}`}>
                               Hi {session?.user?.name?.split(' ')[0]}!
                            </Link>

                            {/* <Link href={'/startup/create'}> Create</Link> */}
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: '/' });
                            }}>
                                <button type='submit' title='Log Out'> <LogOut className='size-4'/></button>
                            </form>

                        </div>
                        : <form action={async () => {
                            "use server";
                            await signIn();
                        }}>
                            <button type='submit' className='font-bold text-secondary'> Log In</button>
                        </form>
                    }

                </div>


            </nav>




        </header>
    )
}

export default Navbar