import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzks")
export default class MzkController {
  @operation({
    summary: "Get Mzks",
  })
  @get()
  static getMzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzk",
  })
  @post("{id}")
  static createMzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
