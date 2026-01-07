import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
