import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djis")
export default class DjiController {
  @operation({
    summary: "Get Djis",
  })
  @get()
  static getDjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dji",
  })
  @post("{id}")
  static createDji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
