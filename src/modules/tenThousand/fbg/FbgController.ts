import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbgs")
export default class FbgController {
  @operation({
    summary: "Get Fbgs",
  })
  @get()
  static getFbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbg",
  })
  @post("{id}")
  static createFbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
