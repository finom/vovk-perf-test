import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llms")
export default class LlmController {
  @operation({
    summary: "Get Llms",
  })
  @get()
  static getLlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llm",
  })
  @post("{id}")
  static createLlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
