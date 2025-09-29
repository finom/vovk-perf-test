import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbzs")
export default class FbzController {
  @operation({
    summary: "Get Fbzs",
  })
  @get()
  static getFbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbz",
  })
  @post("{id}")
  static createFbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
