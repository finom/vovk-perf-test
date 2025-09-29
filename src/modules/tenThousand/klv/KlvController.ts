import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klvs")
export default class KlvController {
  @operation({
    summary: "Get Klvs",
  })
  @get()
  static getKlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klv",
  })
  @post("{id}")
  static createKlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
