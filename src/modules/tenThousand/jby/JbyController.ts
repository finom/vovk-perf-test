import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbies")
export default class JbyController {
  @operation({
    summary: "Get Jbies",
  })
  @get()
  static getJbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jby",
  })
  @post("{id}")
  static createJby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
