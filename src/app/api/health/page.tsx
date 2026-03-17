'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';

export default function HealthPage() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    setHealth({
      status: 'ok',
      hasUrl: !!url,
      urlLength: url ? url.length : 0,
      hasKey: !!key,
      keyLength: key ? key.length : 0,
      nodeEnv: process.env.NODE_ENV || 'development'
    });
  }, []);

  if (!health) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Health Check
        </Typography>
        <Typography>Status: {health.status}</Typography>
        <Typography>Supabase URL: {health.hasUrl ? `✅ (${health.urlLength} chars)` : '❌'}</Typography>
        <Typography>Supabase Key: {health.hasKey ? `✅ (${health.keyLength} chars)` : '❌'}</Typography>
        <Typography>Node Env: {health.nodeEnv}</Typography>
      </Paper>
    </Box>
  );
}
