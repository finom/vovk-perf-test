import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaqs")
export default class EaqController {
  @operation({
    summary: "Get Eaqs",
  })
  @get()
  static getEaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaq",
  })
  @post("{id}")
  static createEaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
