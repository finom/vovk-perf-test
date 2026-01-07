import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cao")
export default class CaoController {
  @operation({
    summary: "Get Cao",
  })
  @get()
  static getCao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cao",
  })
  @post("{id}")
  static createCao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
