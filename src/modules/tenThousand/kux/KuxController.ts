import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuxes")
export default class KuxController {
  @operation({
    summary: "Get Kuxes",
  })
  @get()
  static getKuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kux",
  })
  @post("{id}")
  static createKux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
