import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lot")
export default class LotController {
  @operation({
    summary: "Get Lot",
  })
  @get()
  static getLot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lot",
  })
  @post("{id}")
  static createLot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
