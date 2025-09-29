import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqqs")
export default class JqqController {
  @operation({
    summary: "Get Jqqs",
  })
  @get()
  static getJqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqq",
  })
  @post("{id}")
  static createJqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
