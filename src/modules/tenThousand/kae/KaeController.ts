import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaes")
export default class KaeController {
  @operation({
    summary: "Get Kaes",
  })
  @get()
  static getKaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kae",
  })
  @post("{id}")
  static createKae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
