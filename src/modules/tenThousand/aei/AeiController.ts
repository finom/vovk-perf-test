import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeis")
export default class AeiController {
  @operation({
    summary: "Get Aeis",
  })
  @get()
  static getAeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aei",
  })
  @post("{id}")
  static createAei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
