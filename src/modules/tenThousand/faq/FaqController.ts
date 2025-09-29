import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faqs")
export default class FaqController {
  @operation({
    summary: "Get Faqs",
  })
  @get()
  static getFaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faq",
  })
  @post("{id}")
  static createFaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
