import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feis")
export default class FeiController {
  @operation({
    summary: "Get Feis",
  })
  @get()
  static getFeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fei",
  })
  @post("{id}")
  static createFei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
