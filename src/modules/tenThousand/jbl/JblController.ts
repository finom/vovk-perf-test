import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbls")
export default class JblController {
  @operation({
    summary: "Get Jbls",
  })
  @get()
  static getJbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbl",
  })
  @post("{id}")
  static createJbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
