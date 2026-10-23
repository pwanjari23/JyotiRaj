-- ========================================================
-- Jyotiraj Global Company - Supabase Database Schema
-- Run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/mabddjypaforvullithk/sql
-- ========================================================

CREATE TABLE IF NOT EXISTS public.customer_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  order_reference TEXT,
  customer_name TEXT,
  customer_whatsapp TEXT,
  customer_address TEXT,
  customer_city TEXT,
  customer_pincode TEXT,
  payment_method TEXT,
  items JSONB,
  subtotal NUMERIC DEFAULT 0,
  shipping_fee NUMERIC DEFAULT 0,
  total_estimated_rate NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.customer_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow inserts from web clients (anon key & service_role)
DROP POLICY IF EXISTS "Allow public insert to customer_enquiries" ON public.customer_enquiries;
CREATE POLICY "Allow public insert to customer_enquiries"
ON public.customer_enquiries
FOR INSERT
TO anon, authenticated, service_role
WITH CHECK (true);

-- Allow reading/managing enquiries by service_role (Admin)
DROP POLICY IF EXISTS "Allow service_role full access" ON public.customer_enquiries;
CREATE POLICY "Allow service_role full access"
ON public.customer_enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Indexes for fast querying in Supabase Dashboard
CREATE INDEX IF NOT EXISTS idx_customer_enquiries_order_ref ON public.customer_enquiries(order_reference);
CREATE INDEX IF NOT EXISTS idx_customer_enquiries_created_at ON public.customer_enquiries(created_at DESC);
