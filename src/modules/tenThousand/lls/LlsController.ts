import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lls")
export default class LlsController {
  @operation({
    summary: "Get Lls",
  })
  @get()
  static getLls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lls",
  })
  @post("{id}")
  static createLls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
