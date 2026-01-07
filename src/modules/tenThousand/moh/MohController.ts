import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moh")
export default class MohController {
  @operation({
    summary: "Get Moh",
  })
  @get()
  static getMoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moh",
  })
  @post("{id}")
  static createMoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
