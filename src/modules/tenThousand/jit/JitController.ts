import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jits")
export default class JitController {
  @operation({
    summary: "Get Jits",
  })
  @get()
  static getJits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jit",
  })
  @post("{id}")
  static createJit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
