import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lots")
export default class LotController {
  @operation({
    summary: "Get Lots",
  })
  @get()
  static getLots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lot",
  })
  @post("{id}")
  static createLot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
