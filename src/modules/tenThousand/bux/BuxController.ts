import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buxes")
export default class BuxController {
  @operation({
    summary: "Get Buxes",
  })
  @get()
  static getBuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bux",
  })
  @post("{id}")
  static createBux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
