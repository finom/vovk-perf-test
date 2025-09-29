import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfus")
export default class JfuController {
  @operation({
    summary: "Get Jfus",
  })
  @get()
  static getJfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfu",
  })
  @post("{id}")
  static createJfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
