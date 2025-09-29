import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzxes")
export default class DzxController {
  @operation({
    summary: "Get Dzxes",
  })
  @get()
  static getDzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzx",
  })
  @post("{id}")
  static createDzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
