import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyos")
export default class LyoController {
  @operation({
    summary: "Get Lyos",
  })
  @get()
  static getLyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyo",
  })
  @post("{id}")
  static createLyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
