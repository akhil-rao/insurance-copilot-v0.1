export type Segment = 'Retail' | 'SME' | 'Corporate'

export interface Customer {
  customer_id: string
  segment: Segment
  name: string
  emirates_id?: string
  nationality?: string
}

export interface Policy {
  policy_id: string
  customer_id: string
  product: string
  type: string
  status: 'Active' | 'Expired' | 'Cancelled'
  start_date: string
  end_date: string
  sum_assured?: number
  nominee_name?: string
  insurer: string
  next_due_date?: string | null
  premium_amount?: number
  payment_freq?: string
  vehicle_vin?: string
  vehicle_plate?: string
  group_size?: number
  fleet_count?: number
}

export interface Claim {
  claim_id: string
  policy_id: string
  customer_id: string
  product: string
  incident_date: string
  claim_amount: number
  claim_reason: string
  payout_date?: string | null
  status: 'Settled' | 'In Review' | 'Rejected'
  insured_value?: number
}
