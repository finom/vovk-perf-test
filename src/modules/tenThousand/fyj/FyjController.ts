import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyjs")
export default class FyjController {
  @operation({
    summary: "Get Fyjs",
  })
  @get()
  static getFyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyj",
  })
  @post("{id}")
  static createFyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
