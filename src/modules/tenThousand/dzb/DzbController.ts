import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzbs")
export default class DzbController {
  @operation({
    summary: "Get Dzbs",
  })
  @get()
  static getDzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzb",
  })
  @post("{id}")
  static createDzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
