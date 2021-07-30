export interface MerchantDto {
  categoryId: number
  iconUrl: string
  id: string
  isBill: boolean
  name: string
  transactions: TransactionDto[]
}

export interface TransactionDto {
  amount: number
  date: string
  id: number
}
