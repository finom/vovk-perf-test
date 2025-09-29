import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejis")
export default class EjiController {
  @operation({
    summary: "Get Ejis",
  })
  @get()
  static getEjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eji",
  })
  @post("{id}")
  static createEji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
