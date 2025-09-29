import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuxes")
export default class CuxController {
  @operation({
    summary: "Get Cuxes",
  })
  @get()
  static getCuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cux",
  })
  @post("{id}")
  static createCux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
