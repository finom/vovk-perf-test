import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjts")
export default class MjtController {
  @operation({
    summary: "Get Mjts",
  })
  @get()
  static getMjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjt",
  })
  @post("{id}")
  static createMjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
