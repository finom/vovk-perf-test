import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebks")
export default class EbkController {
  @operation({
    summary: "Get Ebks",
  })
  @get()
  static getEbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebk",
  })
  @post("{id}")
  static createEbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
