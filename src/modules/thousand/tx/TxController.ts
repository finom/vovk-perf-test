import { procedure, prefix, get, post, operation } from "vovk";

@prefix("txes")
export default class TxController {
  @operation({
    summary: "Get Txes",
  })
  @get()
  static getTxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tx",
  })
  @post("{id}")
  static createTx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
