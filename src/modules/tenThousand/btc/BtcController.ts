import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btcs")
export default class BtcController {
  @operation({
    summary: "Get Btcs",
  })
  @get()
  static getBtcs = procedure({
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
