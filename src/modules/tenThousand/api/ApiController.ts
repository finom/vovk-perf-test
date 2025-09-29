import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apis")
export default class ApiController {
  @operation({
    summary: "Get Apis",
  })
  @get()
  static getApis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Api",
  })
  @post("{id}")
  static createApi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
