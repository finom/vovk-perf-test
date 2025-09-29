import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyas")
export default class LyaController {
  @operation({
    summary: "Get Lyas",
  })
  @get()
  static getLyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lya",
  })
  @post("{id}")
  static createLya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
