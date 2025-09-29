import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njis")
export default class NjiController {
  @operation({
    summary: "Get Njis",
  })
  @get()
  static getNjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nji",
  })
  @post("{id}")
  static createNji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
