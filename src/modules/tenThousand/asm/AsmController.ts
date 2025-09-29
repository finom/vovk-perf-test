import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asms")
export default class AsmController {
  @operation({
    summary: "Get Asms",
  })
  @get()
  static getAsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asm",
  })
  @post("{id}")
  static createAsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
