import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbks")
export default class JbkController {
  @operation({
    summary: "Get Jbks",
  })
  @get()
  static getJbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbk",
  })
  @post("{id}")
  static createJbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
