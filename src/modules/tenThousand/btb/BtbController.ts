import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btbs")
export default class BtbController {
  @operation({
    summary: "Get Btbs",
  })
  @get()
  static getBtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btb",
  })
  @post("{id}")
  static createBtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
