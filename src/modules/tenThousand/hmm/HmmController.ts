import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmm")
export default class HmmController {
  @operation({
    summary: "Get Hmm",
  })
  @get()
  static getHmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmm",
  })
  @post("{id}")
  static createHmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
