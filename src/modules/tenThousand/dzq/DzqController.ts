import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzqs")
export default class DzqController {
  @operation({
    summary: "Get Dzqs",
  })
  @get()
  static getDzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzq",
  })
  @post("{id}")
  static createDzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
