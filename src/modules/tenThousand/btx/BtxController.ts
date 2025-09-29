import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btxes")
export default class BtxController {
  @operation({
    summary: "Get Btxes",
  })
  @get()
  static getBtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btx",
  })
  @post("{id}")
  static createBtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
