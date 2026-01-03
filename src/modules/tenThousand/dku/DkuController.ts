import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkus")
export default class DkuController {
  @operation({
    summary: "Get Dkus",
  })
  @get()
  static getDkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dku",
  })
  @post("{id}")
  static createDku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
