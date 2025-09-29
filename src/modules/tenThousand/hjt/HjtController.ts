import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjts")
export default class HjtController {
  @operation({
    summary: "Get Hjts",
  })
  @get()
  static getHjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjt",
  })
  @post("{id}")
  static createHjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
