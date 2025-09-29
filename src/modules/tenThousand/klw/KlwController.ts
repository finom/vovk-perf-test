import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klws")
export default class KlwController {
  @operation({
    summary: "Get Klws",
  })
  @get()
  static getKlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klw",
  })
  @post("{id}")
  static createKlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
