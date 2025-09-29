import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llws")
export default class LlwController {
  @operation({
    summary: "Get Llws",
  })
  @get()
  static getLlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llw",
  })
  @post("{id}")
  static createLlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
