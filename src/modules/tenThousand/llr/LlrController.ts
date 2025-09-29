import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llrs")
export default class LlrController {
  @operation({
    summary: "Get Llrs",
  })
  @get()
  static getLlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llr",
  })
  @post("{id}")
  static createLlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
