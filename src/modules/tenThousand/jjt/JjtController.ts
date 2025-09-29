import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjts")
export default class JjtController {
  @operation({
    summary: "Get Jjts",
  })
  @get()
  static getJjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjt",
  })
  @post("{id}")
  static createJjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
