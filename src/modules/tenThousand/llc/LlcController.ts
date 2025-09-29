import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llcs")
export default class LlcController {
  @operation({
    summary: "Get Llcs",
  })
  @get()
  static getLlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llc",
  })
  @post("{id}")
  static createLlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
