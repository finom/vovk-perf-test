import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqgs")
export default class JqgController {
  @operation({
    summary: "Get Jqgs",
  })
  @get()
  static getJqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqg",
  })
  @post("{id}")
  static createJqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
