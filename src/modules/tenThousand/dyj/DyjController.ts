import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyjs")
export default class DyjController {
  @operation({
    summary: "Get Dyjs",
  })
  @get()
  static getDyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyj",
  })
  @post("{id}")
  static createDyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
