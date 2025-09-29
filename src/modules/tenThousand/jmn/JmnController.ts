import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmns")
export default class JmnController {
  @operation({
    summary: "Get Jmns",
  })
  @get()
  static getJmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmn",
  })
  @post("{id}")
  static createJmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
