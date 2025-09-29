import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klbs")
export default class KlbController {
  @operation({
    summary: "Get Klbs",
  })
  @get()
  static getKlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klb",
  })
  @post("{id}")
  static createKlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
