import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    status: 'ok',
    hasUrl: !!url,
    urlLength: url ? url.length : 0,
    hasKey: !!key,
    keyLength: key ? key.length : 0,
    nodeEnv: process.env.NODE_ENV
  });
}
