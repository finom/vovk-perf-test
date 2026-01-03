import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faqs")
export default class FaqController {
  @operation({
    summary: "Get Faqs",
  })
  @get()
  static getFaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Faq",
  })
  @post("{id}")
  static createFaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
