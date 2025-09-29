import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eczs")
export default class EczController {
  @operation({
    summary: "Get Eczs",
  })
  @get()
  static getEczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecz",
  })
  @post("{id}")
  static createEcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
