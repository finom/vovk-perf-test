import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbks")
export default class FbkController {
  @operation({
    summary: "Get Fbks",
  })
  @get()
  static getFbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbk",
  })
  @post("{id}")
  static createFbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
