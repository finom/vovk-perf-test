import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldies")
export default class LdyController {
  @operation({
    summary: "Get Ldies",
  })
  @get()
  static getLdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldy",
  })
  @post("{id}")
  static createLdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
