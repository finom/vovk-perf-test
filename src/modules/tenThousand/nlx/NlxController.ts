import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlx")
export default class NlxController {
  @operation({
    summary: "Get Nlx",
  })
  @get()
  static getNlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlx",
  })
  @post("{id}")
  static createNlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
