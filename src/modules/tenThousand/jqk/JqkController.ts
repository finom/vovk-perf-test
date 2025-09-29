import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqks")
export default class JqkController {
  @operation({
    summary: "Get Jqks",
  })
  @get()
  static getJqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqk",
  })
  @post("{id}")
  static createJqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
