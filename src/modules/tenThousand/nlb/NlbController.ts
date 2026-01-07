import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlb")
export default class NlbController {
  @operation({
    summary: "Get Nlb",
  })
  @get()
  static getNlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlb",
  })
  @post("{id}")
  static createNlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
