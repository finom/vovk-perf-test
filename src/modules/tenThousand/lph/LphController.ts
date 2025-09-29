import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lphs")
export default class LphController {
  @operation({
    summary: "Get Lphs",
  })
  @get()
  static getLphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lph",
  })
  @post("{id}")
  static createLph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
