import dayjs from 'dayjs'

/**
 * date formatter
 */
export function formatDate(date: string | number | Date): string {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}
