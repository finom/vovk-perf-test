import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgls")
export default class JglController {
  @operation({
    summary: "Get Jgls",
  })
  @get()
  static getJgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgl",
  })
  @post("{id}")
  static createJgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
