import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcbs")
export default class McbController {
  @operation({
    summary: "Get Mcbs",
  })
  @get()
  static getMcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcb",
  })
  @post("{id}")
  static createMcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
