import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqhs")
export default class JqhController {
  @operation({
    summary: "Get Jqhs",
  })
  @get()
  static getJqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqh",
  })
  @post("{id}")
  static createJqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
