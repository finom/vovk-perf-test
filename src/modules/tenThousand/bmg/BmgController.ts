import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmgs")
export default class BmgController {
  @operation({
    summary: "Get Bmgs",
  })
  @get()
  static getBmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmg",
  })
  @post("{id}")
  static createBmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
