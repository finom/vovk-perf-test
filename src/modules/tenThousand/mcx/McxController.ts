import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcxes")
export default class McxController {
  @operation({
    summary: "Get Mcxes",
  })
  @get()
  static getMcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcx",
  })
  @post("{id}")
  static createMcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
