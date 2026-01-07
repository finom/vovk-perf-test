import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqa")
export default class CqaController {
  @operation({
    summary: "Get Cqa",
  })
  @get()
  static getCqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqa",
  })
  @post("{id}")
  static createCqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
