import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcls")
export default class MclController {
  @operation({
    summary: "Get Mcls",
  })
  @get()
  static getMcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcl",
  })
  @post("{id}")
  static createMcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
