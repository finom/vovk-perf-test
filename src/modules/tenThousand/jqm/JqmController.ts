import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqms")
export default class JqmController {
  @operation({
    summary: "Get Jqms",
  })
  @get()
  static getJqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqm",
  })
  @post("{id}")
  static createJqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
