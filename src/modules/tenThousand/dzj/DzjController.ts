import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzjs")
export default class DzjController {
  @operation({
    summary: "Get Dzjs",
  })
  @get()
  static getDzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzj",
  })
  @post("{id}")
  static createDzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
