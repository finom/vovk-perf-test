import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkus")
export default class DkuController {
  @operation({
    summary: "Get Dkus",
  })
  @get()
  static getDkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dku",
  })
  @post("{id}")
  static createDku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
