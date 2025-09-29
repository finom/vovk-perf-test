import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klks")
export default class KlkController {
  @operation({
    summary: "Get Klks",
  })
  @get()
  static getKlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klk",
  })
  @post("{id}")
  static createKlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
