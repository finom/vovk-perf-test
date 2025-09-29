import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldhs")
export default class LdhController {
  @operation({
    summary: "Get Ldhs",
  })
  @get()
  static getLdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldh",
  })
  @post("{id}")
  static createLdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
