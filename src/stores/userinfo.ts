export const useUserInfo = createGlobalState(
  () => useStorage('userinfo',
    { username: '', token: '', language: 'en_US' },
    sessionStorage),
)
