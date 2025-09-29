import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzus")
export default class DzuController {
  @operation({
    summary: "Get Dzus",
  })
  @get()
  static getDzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzu",
  })
  @post("{id}")
  static createDzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
