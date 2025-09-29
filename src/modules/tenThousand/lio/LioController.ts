import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lios")
export default class LioController {
  @operation({
    summary: "Get Lios",
  })
  @get()
  static getLios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lio",
  })
  @post("{id}")
  static createLio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
