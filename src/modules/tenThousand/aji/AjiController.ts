import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajis")
export default class AjiController {
  @operation({
    summary: "Get Ajis",
  })
  @get()
  static getAjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aji",
  })
  @post("{id}")
  static createAji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
