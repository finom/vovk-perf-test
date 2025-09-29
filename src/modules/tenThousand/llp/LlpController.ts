import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llps")
export default class LlpController {
  @operation({
    summary: "Get Llps",
  })
  @get()
  static getLlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llp",
  })
  @post("{id}")
  static createLlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
