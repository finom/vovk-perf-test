import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqws")
export default class JqwController {
  @operation({
    summary: "Get Jqws",
  })
  @get()
  static getJqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqw",
  })
  @post("{id}")
  static createJqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
