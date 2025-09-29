import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fels")
export default class FelController {
  @operation({
    summary: "Get Fels",
  })
  @get()
  static getFels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fel",
  })
  @post("{id}")
  static createFel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
