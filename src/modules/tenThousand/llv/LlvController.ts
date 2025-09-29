import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llvs")
export default class LlvController {
  @operation({
    summary: "Get Llvs",
  })
  @get()
  static getLlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llv",
  })
  @post("{id}")
  static createLlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
