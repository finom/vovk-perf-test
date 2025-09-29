import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljts")
export default class LjtController {
  @operation({
    summary: "Get Ljts",
  })
  @get()
  static getLjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljt",
  })
  @post("{id}")
  static createLjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
