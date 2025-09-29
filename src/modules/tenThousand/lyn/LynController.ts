import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyns")
export default class LynController {
  @operation({
    summary: "Get Lyns",
  })
  @get()
  static getLyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyn",
  })
  @post("{id}")
  static createLyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
