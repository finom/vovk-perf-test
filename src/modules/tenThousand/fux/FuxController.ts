import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuxes")
export default class FuxController {
  @operation({
    summary: "Get Fuxes",
  })
  @get()
  static getFuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fux",
  })
  @post("{id}")
  static createFux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
