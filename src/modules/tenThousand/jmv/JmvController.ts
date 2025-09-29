import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmvs")
export default class JmvController {
  @operation({
    summary: "Get Jmvs",
  })
  @get()
  static getJmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmv",
  })
  @post("{id}")
  static createJmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
