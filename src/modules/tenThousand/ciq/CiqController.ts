import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ciqs")
export default class CiqController {
  @operation({
    summary: "Get Ciqs",
  })
  @get()
  static getCiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ciq",
  })
  @post("{id}")
  static createCiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
