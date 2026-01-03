import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auys")
export default class AuyController {
  @operation({
    summary: "Get Auys",
  })
  @get()
  static getAuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auy",
  })
  @post("{id}")
  static createAuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
