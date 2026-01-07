import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btc")
export default class BtcController {
  @operation({
    summary: "Get Btc",
  })
  @get()
  static getBtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btc",
  })
  @post("{id}")
  static createBtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
