import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deas")
export default class DeaController {
  @operation({
    summary: "Get Deas",
  })
  @get()
  static getDeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dea",
  })
  @post("{id}")
  static createDea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
