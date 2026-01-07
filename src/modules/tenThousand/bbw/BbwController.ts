import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbw")
export default class BbwController {
  @operation({
    summary: "Get Bbw",
  })
  @get()
  static getBbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbw",
  })
  @post("{id}")
  static createBbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
