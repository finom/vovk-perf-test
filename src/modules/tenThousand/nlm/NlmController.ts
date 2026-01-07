import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlm")
export default class NlmController {
  @operation({
    summary: "Get Nlm",
  })
  @get()
  static getNlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlm",
  })
  @post("{id}")
  static createNlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
