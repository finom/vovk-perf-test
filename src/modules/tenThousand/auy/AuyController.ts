import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auys")
export default class AuyController {
  @operation({
    summary: "Get Auys",
  })
  @get()
  static getAuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auy",
  })
  @post("{id}")
  static createAuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
