import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klms")
export default class KlmController {
  @operation({
    summary: "Get Klms",
  })
  @get()
  static getKlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klm",
  })
  @post("{id}")
  static createKlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
