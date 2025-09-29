import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llves")
export default class LlfController {
  @operation({
    summary: "Get Llves",
  })
  @get()
  static getLlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llf",
  })
  @post("{id}")
  static createLlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
