import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fes")
export default class FeController {
  @operation({
    summary: "Get Fes",
  })
  @get()
  static getFes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fe",
  })
  @post("{id}")
  static createFe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
