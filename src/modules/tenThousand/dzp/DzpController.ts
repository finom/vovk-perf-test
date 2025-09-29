import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzps")
export default class DzpController {
  @operation({
    summary: "Get Dzps",
  })
  @get()
  static getDzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzp",
  })
  @post("{id}")
  static createDzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
