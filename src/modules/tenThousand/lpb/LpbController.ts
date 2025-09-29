import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpbs")
export default class LpbController {
  @operation({
    summary: "Get Lpbs",
  })
  @get()
  static getLpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpb",
  })
  @post("{id}")
  static createLpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
