import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlq")
export default class NlqController {
  @operation({
    summary: "Get Nlq",
  })
  @get()
  static getNlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlq",
  })
  @post("{id}")
  static createNlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
