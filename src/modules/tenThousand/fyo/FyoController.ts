import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyos")
export default class FyoController {
  @operation({
    summary: "Get Fyos",
  })
  @get()
  static getFyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyo",
  })
  @post("{id}")
  static createFyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
