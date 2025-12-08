import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST() {
    try {
        const order = await razorpay.orders.create({
            amount: 100, // Amount in paise (100 paise = ₹1) ~ roughly $1 adjusted for local pricing logic if needed, but 100 INR is approx $1.20
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        })

        return NextResponse.json({ orderId: order.id }, { status: 200 })
    } catch (error) {
        console.error('Error creating order:', error)
        return NextResponse.json(
            { error: 'Error creating order' },
            { status: 500 }
        )
    }
}
