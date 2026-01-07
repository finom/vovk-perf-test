import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbp")
export default class BbpController {
  @operation({
    summary: "Get Bbp",
  })
  @get()
  static getBbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbp",
  })
  @post("{id}")
  static createBbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
