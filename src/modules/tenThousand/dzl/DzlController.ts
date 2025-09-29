import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzls")
export default class DzlController {
  @operation({
    summary: "Get Dzls",
  })
  @get()
  static getDzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzl",
  })
  @post("{id}")
  static createDzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
