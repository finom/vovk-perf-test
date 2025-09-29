import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqzs")
export default class JqzController {
  @operation({
    summary: "Get Jqzs",
  })
  @get()
  static getJqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqz",
  })
  @post("{id}")
  static createJqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
