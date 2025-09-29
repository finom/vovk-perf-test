import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbgs")
export default class JbgController {
  @operation({
    summary: "Get Jbgs",
  })
  @get()
  static getJbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbg",
  })
  @post("{id}")
  static createJbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
