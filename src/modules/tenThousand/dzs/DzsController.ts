import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzs")
export default class DzsController {
  @operation({
    summary: "Get Dzs",
  })
  @get()
  static getDzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzs",
  })
  @post("{id}")
  static createDzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
