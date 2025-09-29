import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kajs")
export default class KajController {
  @operation({
    summary: "Get Kajs",
  })
  @get()
  static getKajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaj",
  })
  @post("{id}")
  static createKaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
