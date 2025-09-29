import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekws")
export default class EkwController {
  @operation({
    summary: "Get Ekws",
  })
  @get()
  static getEkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekw",
  })
  @post("{id}")
  static createEkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
