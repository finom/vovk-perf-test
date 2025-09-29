import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duxes")
export default class DuxController {
  @operation({
    summary: "Get Duxes",
  })
  @get()
  static getDuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dux",
  })
  @post("{id}")
  static createDux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
