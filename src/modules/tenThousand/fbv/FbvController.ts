import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbvs")
export default class FbvController {
  @operation({
    summary: "Get Fbvs",
  })
  @get()
  static getFbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbv",
  })
  @post("{id}")
  static createFbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
