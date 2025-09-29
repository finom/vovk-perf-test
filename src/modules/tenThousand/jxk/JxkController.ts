import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxks")
export default class JxkController {
  @operation({
    summary: "Get Jxks",
  })
  @get()
  static getJxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxk",
  })
  @post("{id}")
  static createJxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
