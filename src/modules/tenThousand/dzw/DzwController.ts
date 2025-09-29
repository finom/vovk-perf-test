import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzws")
export default class DzwController {
  @operation({
    summary: "Get Dzws",
  })
  @get()
  static getDzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzw",
  })
  @post("{id}")
  static createDzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
