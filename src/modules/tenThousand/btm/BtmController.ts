import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btms")
export default class BtmController {
  @operation({
    summary: "Get Btms",
  })
  @get()
  static getBtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btm",
  })
  @post("{id}")
  static createBtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
