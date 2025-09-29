import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjts")
export default class KjtController {
  @operation({
    summary: "Get Kjts",
  })
  @get()
  static getKjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjt",
  })
  @post("{id}")
  static createKjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
