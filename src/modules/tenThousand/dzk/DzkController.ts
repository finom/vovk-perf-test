import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzks")
export default class DzkController {
  @operation({
    summary: "Get Dzks",
  })
  @get()
  static getDzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzk",
  })
  @post("{id}")
  static createDzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
