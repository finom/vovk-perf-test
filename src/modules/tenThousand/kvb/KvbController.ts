import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvb")
export default class KvbController {
  @operation({
    summary: "Get Kvb",
  })
  @get()
  static getKvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvb",
  })
  @post("{id}")
  static createKvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
