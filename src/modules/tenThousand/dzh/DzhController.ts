import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzhs")
export default class DzhController {
  @operation({
    summary: "Get Dzhs",
  })
  @get()
  static getDzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzh",
  })
  @post("{id}")
  static createDzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
