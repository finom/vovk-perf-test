import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lavs")
export default class LavController {
  @operation({
    summary: "Get Lavs",
  })
  @get()
  static getLavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lav",
  })
  @post("{id}")
  static createLav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
