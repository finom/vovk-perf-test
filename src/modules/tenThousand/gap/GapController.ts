import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaps")
export default class GapController {
  @operation({
    summary: "Get Gaps",
  })
  @get()
  static getGaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gap",
  })
  @post("{id}")
  static createGap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
