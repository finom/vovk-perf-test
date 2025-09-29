import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fes")
export default class FesController {
  @operation({
    summary: "Get Fes",
  })
  @get()
  static getFes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fes",
  })
  @post("{id}")
  static createFes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
