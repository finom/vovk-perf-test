import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fiqs")
export default class FiqController {
  @operation({
    summary: "Get Fiqs",
  })
  @get()
  static getFiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiq",
  })
  @post("{id}")
  static createFiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
