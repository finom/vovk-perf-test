import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ss")
export default class SsController {
  @operation({
    summary: "Get Ss",
  })
  @get()
  static getSs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ss",
  })
  @post("{id}")
  static createSs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
