const pad0 = (n: number, len: number) => ('' + n).padStart(len, '0')

export const stringifyDate = (num: number): string => {
  if (!Number.isFinite(num)) return '----/--/--'
  const date = new Date(num)
  return `${date.getFullYear()}/${pad0(date.getMonth(), 2)}/${pad0(
    date.getDate(),
    2
  )}`
}

export const toNow = (num: number): string | undefined => {
  if (!Number.isFinite(num)) return undefined
  const diffDay = (num - Date.now()) / 1000 / 60 / 60 / 24
  if (diffDay < 0) {
    return `${Math.ceil(-diffDay)}日前`
  }

  if (diffDay < 30) {
    return `${Math.ceil(diffDay)}日後`
  }
  const diffMonth = diffDay / 30
  return `${Math.ceil(diffMonth)}ヶ月後`
}