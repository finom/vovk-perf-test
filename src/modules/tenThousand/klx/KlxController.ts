import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klxes")
export default class KlxController {
  @operation({
    summary: "Get Klxes",
  })
  @get()
  static getKlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klx",
  })
  @post("{id}")
  static createKlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
