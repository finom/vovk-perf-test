import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlr")
export default class NlrController {
  @operation({
    summary: "Get Nlr",
  })
  @get()
  static getNlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlr",
  })
  @post("{id}")
  static createNlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
