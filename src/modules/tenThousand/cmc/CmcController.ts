import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmc")
export default class CmcController {
  @operation({
    summary: "Get Cmc",
  })
  @get()
  static getCmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmc",
  })
  @post("{id}")
  static createCmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
