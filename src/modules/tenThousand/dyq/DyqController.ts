import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyqs")
export default class DyqController {
  @operation({
    summary: "Get Dyqs",
  })
  @get()
  static getDyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyq",
  })
  @post("{id}")
  static createDyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
