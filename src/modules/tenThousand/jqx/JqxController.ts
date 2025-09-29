import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqxes")
export default class JqxController {
  @operation({
    summary: "Get Jqxes",
  })
  @get()
  static getJqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqx",
  })
  @post("{id}")
  static createJqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
