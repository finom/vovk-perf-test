import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eres")
export default class EreController {
  @operation({
    summary: "Get Eres",
  })
  @get()
  static getEres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ere",
  })
  @post("{id}")
  static createEre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
