import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekbs")
export default class EkbController {
  @operation({
    summary: "Get Ekbs",
  })
  @get()
  static getEkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekb",
  })
  @post("{id}")
  static createEkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
