import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqvs")
export default class JqvController {
  @operation({
    summary: "Get Jqvs",
  })
  @get()
  static getJqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqv",
  })
  @post("{id}")
  static createJqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
