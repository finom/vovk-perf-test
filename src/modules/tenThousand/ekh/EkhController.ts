import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekhs")
export default class EkhController {
  @operation({
    summary: "Get Ekhs",
  })
  @get()
  static getEkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekh",
  })
  @post("{id}")
  static createEkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
