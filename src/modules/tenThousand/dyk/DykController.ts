import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyks")
export default class DykController {
  @operation({
    summary: "Get Dyks",
  })
  @get()
  static getDyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyk",
  })
  @post("{id}")
  static createDyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
