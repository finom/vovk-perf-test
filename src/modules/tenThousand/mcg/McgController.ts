import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcgs")
export default class McgController {
  @operation({
    summary: "Get Mcgs",
  })
  @get()
  static getMcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcg",
  })
  @post("{id}")
  static createMcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
