import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nls")
export default class NlsController {
  @operation({
    summary: "Get Nls",
  })
  @get()
  static getNls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nls",
  })
  @post("{id}")
  static createNls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
