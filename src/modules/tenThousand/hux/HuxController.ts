import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huxes")
export default class HuxController {
  @operation({
    summary: "Get Huxes",
  })
  @get()
  static getHuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hux",
  })
  @post("{id}")
  static createHux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
