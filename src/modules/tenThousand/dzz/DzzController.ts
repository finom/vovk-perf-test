import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzzes")
export default class DzzController {
  @operation({
    summary: "Get Dzzes",
  })
  @get()
  static getDzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzz",
  })
  @post("{id}")
  static createDzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
