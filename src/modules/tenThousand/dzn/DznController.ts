import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzns")
export default class DznController {
  @operation({
    summary: "Get Dzns",
  })
  @get()
  static getDzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzn",
  })
  @post("{id}")
  static createDzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
