import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cta")
export default class CtaController {
  @operation({
    summary: "Get Cta",
  })
  @get()
  static getCta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cta",
  })
  @post("{id}")
  static createCta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
