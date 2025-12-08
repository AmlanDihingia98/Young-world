'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { Loader2 } from 'lucide-react'

export default function RazorpayButton() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handlePayment = async () => {
        setLoading(true)

        try {
            // 1. Create Order
            const response = await fetch('/api/create-order', { method: 'POST' })
            const data = await response.json()

            if (!response.ok) throw new Error(data.error)

            // 2. Initialize Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: 100, // paise
                currency: 'INR',
                name: 'Young World Entertainment',
                description: 'Heat Check Challenge Entry',
                image: '/logo.png', // valid relative path
                order_id: data.orderId,
                handler: function (response: any) {
                    // Payment Success
                    alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id)
                    // Redirect to signup or dashboard
                    router.push('/login?mode=signup')
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: '',
                },
                theme: {
                    color: '#FD0704', // Matches our button color
                },
            }

            const paymentObject = new (window as any).Razorpay(options)
            paymentObject.open()
        } catch (error) {
            console.error('Payment failed:', error)
            alert('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />

            <button
                onClick={handlePayment}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-button)] text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(253,7,4,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    'Join for $1'
                )}
            </button>
        </>
    )
}
