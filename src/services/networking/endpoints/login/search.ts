import { DEFAULT_API_CONFIG } from "@github/services"
import { HttpMethod, IDataEndpoint } from "@github/services/networking/endpoints/endpoint.types"

export interface IUserSearch {
  login: string
  id: number
  avatarUrl: string
  url: string
  htmlUrl: string
}

export interface ISearchUsersResult {
  total_count: number
  incomplete_results: boolean
  items?: IUserSearch[]
}

export const searchUsersEndpoint = (
  query: string,
  searchType: string,
  pageNumber: number,
): IDataEndpoint<undefined, ISearchUsersResult> =>
  Object.freeze({
    method: HttpMethod.Get,
    path: `search/users?&per_page=${DEFAULT_API_CONFIG.itemsPerPage}&page=${pageNumber}&q=${query}+type:${searchType}`,
  })

export interface IUserInfo {
  name?: string
  bio?: string
}
export const userInfoEndpoint = (query: string): IDataEndpoint<undefined, IUserInfo> =>
  Object.freeze({
    method: HttpMethod.Get,
    path: `users/${query}`,
  })
