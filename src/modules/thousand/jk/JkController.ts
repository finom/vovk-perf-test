import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jks")
export default class JkController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jk",
  })
  @post("{id}")
  static createJk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
