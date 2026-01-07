import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lda")
export default class LdaController {
  @operation({
    summary: "Get Lda",
  })
  @get()
  static getLda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lda",
  })
  @post("{id}")
  static createLda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
