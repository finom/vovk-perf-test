import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhks")
export default class MhkController {
  @operation({
    summary: "Get Mhks",
  })
  @get()
  static getMhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhk",
  })
  @post("{id}")
  static createMhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
