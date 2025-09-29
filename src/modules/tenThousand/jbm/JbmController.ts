import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbms")
export default class JbmController {
  @operation({
    summary: "Get Jbms",
  })
  @get()
  static getJbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbm",
  })
  @post("{id}")
  static createJbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
