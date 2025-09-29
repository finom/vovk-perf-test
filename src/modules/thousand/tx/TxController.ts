import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("txes")
export default class TxController {
  @operation({
    summary: "Get Txes",
  })
  @get()
  static getTxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tx",
  })
  @post("{id}")
  static createTx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
