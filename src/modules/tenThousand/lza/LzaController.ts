import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzas")
export default class LzaController {
  @operation({
    summary: "Get Lzas",
  })
  @get()
  static getLzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lza",
  })
  @post("{id}")
  static createLza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
