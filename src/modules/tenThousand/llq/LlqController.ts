import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llqs")
export default class LlqController {
  @operation({
    summary: "Get Llqs",
  })
  @get()
  static getLlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llq",
  })
  @post("{id}")
  static createLlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
