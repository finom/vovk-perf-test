import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btcs")
export default class BtcController {
  @operation({
    summary: "Get Btcs",
  })
  @get()
  static getBtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btc",
  })
  @post("{id}")
  static createBtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
