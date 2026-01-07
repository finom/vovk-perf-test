import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbb")
export default class BbbController {
  @operation({
    summary: "Get Bbb",
  })
  @get()
  static getBbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbb",
  })
  @post("{id}")
  static createBbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
