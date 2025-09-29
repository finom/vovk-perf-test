import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbgs")
export default class BbgController {
  @operation({
    summary: "Get Bbgs",
  })
  @get()
  static getBbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbg",
  })
  @post("{id}")
  static createBbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
