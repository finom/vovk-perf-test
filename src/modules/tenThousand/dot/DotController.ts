import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dots")
export default class DotController {
  @operation({
    summary: "Get Dots",
  })
  @get()
  static getDots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dot",
  })
  @post("{id}")
  static createDot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
