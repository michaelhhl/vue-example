import { createI18n } from 'vue-i18n'
import zh from 'element-plus/lib/locale/lang/zh-cn'

export const currentLocale = computed(() => {
  return zh
})

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('./*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(2, yaml ? -5 : -4), value.default]
    }),
)

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages,
})

export default i18n
