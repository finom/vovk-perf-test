import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlw")
export default class NlwController {
  @operation({
    summary: "Get Nlw",
  })
  @get()
  static getNlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlw",
  })
  @post("{id}")
  static createNlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
