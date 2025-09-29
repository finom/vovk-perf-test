import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klts")
export default class KltController {
  @operation({
    summary: "Get Klts",
  })
  @get()
  static getKlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klt",
  })
  @post("{id}")
  static createKlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
