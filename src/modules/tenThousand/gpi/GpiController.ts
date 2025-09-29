import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpis")
export default class GpiController {
  @operation({
    summary: "Get Gpis",
  })
  @get()
  static getGpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpi",
  })
  @post("{id}")
  static createGpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
