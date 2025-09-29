import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lks")
export default class LkController {
  @operation({
    summary: "Get Lks",
  })
  @get()
  static getLks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lk",
  })
  @post("{id}")
  static createLk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
