import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpts")
export default class JptController {
  @operation({
    summary: "Get Jpts",
  })
  @get()
  static getJpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpt",
  })
  @post("{id}")
  static createJpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
