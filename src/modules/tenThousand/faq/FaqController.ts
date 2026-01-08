import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
