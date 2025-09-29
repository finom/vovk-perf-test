import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzrs")
export default class DzrController {
  @operation({
    summary: "Get Dzrs",
  })
  @get()
  static getDzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzr",
  })
  @post("{id}")
  static createDzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
