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

  enum Organization {
    OpenAI
  }

  interface Model {
    id: string
    base: string
    organization: Oranization
    tune: boolean
  }
}
