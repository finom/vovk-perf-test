import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guxes")
export default class GuxController {
  @operation({
    summary: "Get Guxes",
  })
  @get()
  static getGuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gux",
  })
  @post("{id}")
  static createGux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
