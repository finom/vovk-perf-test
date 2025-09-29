import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("liws")
export default class LiwController {
  @operation({
    summary: "Get Liws",
  })
  @get()
  static getLiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liw",
  })
  @post("{id}")
  static createLiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
