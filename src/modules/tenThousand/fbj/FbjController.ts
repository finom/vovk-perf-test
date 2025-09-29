import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbjs")
export default class FbjController {
  @operation({
    summary: "Get Fbjs",
  })
  @get()
  static getFbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbj",
  })
  @post("{id}")
  static createFbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
