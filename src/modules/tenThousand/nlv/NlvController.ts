import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlv")
export default class NlvController {
  @operation({
    summary: "Get Nlv",
  })
  @get()
  static getNlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlv",
  })
  @post("{id}")
  static createNlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
