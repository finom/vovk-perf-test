import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcms")
export default class McmController {
  @operation({
    summary: "Get Mcms",
  })
  @get()
  static getMcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcm",
  })
  @post("{id}")
  static createMcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
