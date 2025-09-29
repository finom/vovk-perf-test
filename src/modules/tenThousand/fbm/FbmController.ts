import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbms")
export default class FbmController {
  @operation({
    summary: "Get Fbms",
  })
  @get()
  static getFbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbm",
  })
  @post("{id}")
  static createFbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
