import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcis")
export default class JciController {
  @operation({
    summary: "Get Jcis",
  })
  @get()
  static getJcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jci",
  })
  @post("{id}")
  static createJci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
