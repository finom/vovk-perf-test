import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltis")
export default class LtiController {
  @operation({
    summary: "Get Ltis",
  })
  @get()
  static getLtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lti",
  })
  @post("{id}")
  static createLti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
