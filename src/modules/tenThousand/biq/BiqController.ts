import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("biqs")
export default class BiqController {
  @operation({
    summary: "Get Biqs",
  })
  @get()
  static getBiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biq",
  })
  @post("{id}")
  static createBiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
