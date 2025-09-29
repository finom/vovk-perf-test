import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkzs")
export default class JkzController {
  @operation({
    summary: "Get Jkzs",
  })
  @get()
  static getJkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkz",
  })
  @post("{id}")
  static createJkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
