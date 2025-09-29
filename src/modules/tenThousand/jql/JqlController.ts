import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqls")
export default class JqlController {
  @operation({
    summary: "Get Jqls",
  })
  @get()
  static getJqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jql",
  })
  @post("{id}")
  static createJql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
