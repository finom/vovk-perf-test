import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luxes")
export default class LuxController {
  @operation({
    summary: "Get Luxes",
  })
  @get()
  static getLuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lux",
  })
  @post("{id}")
  static createLux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
