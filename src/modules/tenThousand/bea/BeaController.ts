import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beas")
export default class BeaController {
  @operation({
    summary: "Get Beas",
  })
  @get()
  static getBeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bea",
  })
  @post("{id}")
  static createBea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
