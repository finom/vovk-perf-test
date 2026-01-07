import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccg")
export default class CcgController {
  @operation({
    summary: "Get Ccg",
  })
  @get()
  static getCcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccg",
  })
  @post("{id}")
  static createCcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
