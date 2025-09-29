import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldjs")
export default class LdjController {
  @operation({
    summary: "Get Ldjs",
  })
  @get()
  static getLdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldj",
  })
  @post("{id}")
  static createLdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
