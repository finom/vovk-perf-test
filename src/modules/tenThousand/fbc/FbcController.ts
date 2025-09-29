import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbcs")
export default class FbcController {
  @operation({
    summary: "Get Fbcs",
  })
  @get()
  static getFbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbc",
  })
  @post("{id}")
  static createFbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
