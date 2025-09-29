import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbvs")
export default class JbvController {
  @operation({
    summary: "Get Jbvs",
  })
  @get()
  static getJbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbv",
  })
  @post("{id}")
  static createJbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
