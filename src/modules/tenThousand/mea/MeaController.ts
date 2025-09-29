import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meas")
export default class MeaController {
  @operation({
    summary: "Get Meas",
  })
  @get()
  static getMeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mea",
  })
  @post("{id}")
  static createMea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
