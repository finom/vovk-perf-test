import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyp")
export default class HypController {
  @operation({
    summary: "Get Hyp",
  })
  @get()
  static getHyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyp",
  })
  @post("{id}")
  static createHyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
