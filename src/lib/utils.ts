import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 导出一个名为 cn 的函数，该函数接收一个不定数量的 ClassValue 类型的参数
export function cn(...inputs: ClassValue[]) {
  // 调用 twMerge 函数，并将 clsx 函数的结果作为参数传入
  // clsx 函数用于将多个类名合并成一个字符串
  // twMerge 函数用于合并 Tailwind CSS 类名，确保它们不会冲突
  return twMerge(clsx(inputs))
}
