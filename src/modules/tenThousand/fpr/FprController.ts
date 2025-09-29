import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fprs")
export default class FprController {
  @operation({
    summary: "Get Fprs",
  })
  @get()
  static getFprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpr",
  })
  @post("{id}")
  static createFpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
