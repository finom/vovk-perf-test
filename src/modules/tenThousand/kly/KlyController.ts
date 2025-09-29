import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klies")
export default class KlyController {
  @operation({
    summary: "Get Klies",
  })
  @get()
  static getKlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kly",
  })
  @post("{id}")
  static createKly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
