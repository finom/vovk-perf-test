import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbbs")
export default class JbbController {
  @operation({
    summary: "Get Jbbs",
  })
  @get()
  static getJbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbb",
  })
  @post("{id}")
  static createJbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
