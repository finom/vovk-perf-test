import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llbs")
export default class LlbController {
  @operation({
    summary: "Get Llbs",
  })
  @get()
  static getLlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llb",
  })
  @post("{id}")
  static createLlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
