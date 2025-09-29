import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btgs")
export default class BtgController {
  @operation({
    summary: "Get Btgs",
  })
  @get()
  static getBtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btg",
  })
  @post("{id}")
  static createBtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
