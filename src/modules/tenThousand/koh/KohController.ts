import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kohs")
export default class KohController {
  @operation({
    summary: "Get Kohs",
  })
  @get()
  static getKohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koh",
  })
  @post("{id}")
  static createKoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
