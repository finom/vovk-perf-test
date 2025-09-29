import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmzs")
export default class BmzController {
  @operation({
    summary: "Get Bmzs",
  })
  @get()
  static getBmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmz",
  })
  @post("{id}")
  static createBmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
