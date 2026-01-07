import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awt")
export default class AwtController {
  @operation({
    summary: "Get Awt",
  })
  @get()
  static getAwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awt",
  })
  @post("{id}")
  static createAwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
