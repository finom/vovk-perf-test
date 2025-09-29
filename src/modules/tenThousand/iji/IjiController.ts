import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijis")
export default class IjiController {
  @operation({
    summary: "Get Ijis",
  })
  @get()
  static getIjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iji",
  })
  @post("{id}")
  static createIji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
