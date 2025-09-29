import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fixes")
export default class FixController {
  @operation({
    summary: "Get Fixes",
  })
  @get()
  static getFixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fix",
  })
  @post("{id}")
  static createFix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
