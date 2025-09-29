import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmps")
export default class CmpController {
  @operation({
    summary: "Get Cmps",
  })
  @get()
  static getCmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmp",
  })
  @post("{id}")
  static createCmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
