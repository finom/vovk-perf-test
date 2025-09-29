import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkws")
export default class JkwController {
  @operation({
    summary: "Get Jkws",
  })
  @get()
  static getJkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkw",
  })
  @post("{id}")
  static createJkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
