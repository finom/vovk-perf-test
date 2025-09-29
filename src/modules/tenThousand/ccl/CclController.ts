import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccls")
export default class CclController {
  @operation({
    summary: "Get Ccls",
  })
  @get()
  static getCcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccl",
  })
  @post("{id}")
  static createCcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
