import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbis")
export default class JbiController {
  @operation({
    summary: "Get Jbis",
  })
  @get()
  static getJbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbi",
  })
  @post("{id}")
  static createJbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
