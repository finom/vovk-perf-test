import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btus")
export default class BtuController {
  @operation({
    summary: "Get Btus",
  })
  @get()
  static getBtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btu",
  })
  @post("{id}")
  static createBtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
