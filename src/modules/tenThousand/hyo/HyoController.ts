import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyos")
export default class HyoController {
  @operation({
    summary: "Get Hyos",
  })
  @get()
  static getHyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyo",
  })
  @post("{id}")
  static createHyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
