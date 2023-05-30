// types/global.d.ts

export {}

declare global {
  interface OpenAIModelPermission {
    allow_fine_tuning: boolean
  }

  interface OpenAIModel {
    id: string
    root: string
    owned_by: string
    permission: Permission[]
  }

  interface Model {
    id: string
    base: string
    organization: string
    tune: boolean
  }
}
