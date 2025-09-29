import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljis")
export default class LjiController {
  @operation({
    summary: "Get Ljis",
  })
  @get()
  static getLjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lji",
  })
  @post("{id}")
  static createLji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
