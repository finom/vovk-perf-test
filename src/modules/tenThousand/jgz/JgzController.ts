import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgzs")
export default class JgzController {
  @operation({
    summary: "Get Jgzs",
  })
  @get()
  static getJgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgz",
  })
  @post("{id}")
  static createJgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
