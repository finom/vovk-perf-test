import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faq")
export default class FaqController {
  @operation({
    summary: "Get Faq",
  })
  @get()
  static getFaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faq",
  })
  @post("{id}")
  static createFaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
