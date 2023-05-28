// types/global.d.ts

export {}

declare global {
  interface Permission {
    allow_fine_tuning: boolean
  }

  interface Model {
    id: string
    root: string
    owned_by: string
    permission: Permission[]
  }
}
