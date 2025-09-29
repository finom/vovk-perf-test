import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bexes")
export default class BexController {
  @operation({
    summary: "Get Bexes",
  })
  @get()
  static getBexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bex",
  })
  @post("{id}")
  static createBex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
