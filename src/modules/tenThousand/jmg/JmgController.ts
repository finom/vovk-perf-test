import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmgs")
export default class JmgController {
  @operation({
    summary: "Get Jmgs",
  })
  @get()
  static getJmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmg",
  })
  @post("{id}")
  static createJmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
