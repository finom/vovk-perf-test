import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjls")
export default class CjlController {
  @operation({
    summary: "Get Cjls",
  })
  @get()
  static getCjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjl",
  })
  @post("{id}")
  static createCjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
