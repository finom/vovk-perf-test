import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjts")
export default class GjtController {
  @operation({
    summary: "Get Gjts",
  })
  @get()
  static getGjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjt",
  })
  @post("{id}")
  static createGjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
