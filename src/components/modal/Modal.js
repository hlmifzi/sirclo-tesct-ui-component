import React, { useState } from 'react'
import './modal.scss'
import { useDidMount } from '../../../../../utils/componentLifeCycle'

export const Modal = () => {
    const [fadeIn, setFadeIn] = useState('fadeIn')
    const [fadeOut, setFadeOut] = useState('')
    const [hidden, setHidden] = useState('')

    const modalClose = () => {
        setFadeIn('')
        setFadeOut('fadeOut')
        setTimeout(() => {
            setHidden('hidden')
        }, 500);
    }

    const openModal = () => {
        setFadeIn('fadeIn')
        setFadeOut('')
        setHidden('')

    }

    return (
        <>

            <div class={`main-modal ${fadeIn} ${fadeOut} ${hidden} fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster`}
                style={{ background: 'rgba(0,0,0,.7)' }}>
                <div
                    class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div class="modal-content py-4 text-left px-6">
                        <div class="flex justify-between items-center pb-3">
                            <p class="text-2xl font-bold">Header</p>
                            <div class="modal-close cursor-pointer z-50" onClick={modalClose}>
                                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="my-5">
                            <p>Inliberali Persius Multi iustitia pronuntiaret expeteretur sanos didicisset laus angusti ferrentur arbitrium arbitramur huic desiderent.?</p>
                        </div>
                        <div class="flex justify-end pt-2">
                            <button
                                class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                                onClick={modalClose}
                            >Cancel</button>
                            <button
                                class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
