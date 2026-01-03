import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lots")
export default class LotController {
  @operation({
    summary: "Get Lots",
  })
  @get()
  static getLots = procedure({
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
