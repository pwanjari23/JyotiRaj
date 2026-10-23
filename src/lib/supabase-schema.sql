-- ========================================================
-- Jyotiraj Global Company - Customer Enquiries & Orders Table
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ========================================================

create table if not exists public.customer_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  order_reference text not null,
  customer_name text not null,
  customer_whatsapp text not null,
  customer_address text not null,
  customer_city text not null,
  customer_pincode text,
  payment_method text default 'Cash on Delivery (COD) / WhatsApp Confirmation',
  items jsonb not null default '[]'::jsonb,
  subtotal numeric not null default 0,
  shipping_fee numeric not null default 0,
  total_estimated_rate numeric not null default 0,
  status text default 'pending' check (status in ('pending', 'contacted', 'confirmed', 'dispatched', 'completed', 'cancelled'))
);

-- Index for searching orders by reference or phone
create index if not exists idx_customer_enquiries_ref on public.customer_enquiries (order_reference);
create index if not exists idx_customer_enquiries_whatsapp on public.customer_enquiries (customer_whatsapp);
create index if not exists idx_customer_enquiries_created_at on public.customer_enquiries (created_at desc);

-- Enable Row Level Security (RLS)
alter table public.customer_enquiries enable row level security;

-- Policy to allow inserting new orders/quotes from website visitors
create policy "Allow public inserts for enquiries" on public.customer_enquiries
  for insert with check (true);

-- Policy to allow authenticated staff/admins to view and manage enquiries
create policy "Allow authenticated users to read and update" on public.customer_enquiries
  for all using (auth.role() = 'authenticated');
