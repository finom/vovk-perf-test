import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djhs")
export default class DjhController {
  @operation({
    summary: "Get Djhs",
  })
  @get()
  static getDjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djh",
  })
  @post("{id}")
  static createDjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
