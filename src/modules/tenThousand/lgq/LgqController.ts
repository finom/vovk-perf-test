import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgqs")
export default class LgqController {
  @operation({
    summary: "Get Lgqs",
  })
  @get()
  static getLgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgq",
  })
  @post("{id}")
  static createLgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
