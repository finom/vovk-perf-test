import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klps")
export default class KlpController {
  @operation({
    summary: "Get Klps",
  })
  @get()
  static getKlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klp",
  })
  @post("{id}")
  static createKlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
