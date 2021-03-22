import { UserApiClient } from "./UserApiClient.ts";
import { VRChatApiRepository } from "../repositories/VRChatApiRepository.ts";

export class VRChatApiClient {
  private readonly _apiKey?: string;
  private readonly _authToken?: string;
  private readonly _user: UserApiClient;

  constructor(
    apiKey: string,
    authToken: string,
    repository: VRChatApiRepository,
  ) {
    this._apiKey = apiKey;
    this._authToken = authToken;

    this._user = new UserApiClient(apiKey, authToken, repository);
  }

  public get apiKey() {
    return this._apiKey;
  }

  public get authToken() {
    return this._authToken;
  }

  public get user() {
    return this._user;
  }
}