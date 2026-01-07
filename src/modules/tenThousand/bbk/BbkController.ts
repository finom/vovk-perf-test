import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbk")
export default class BbkController {
  @operation({
    summary: "Get Bbk",
  })
  @get()
  static getBbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbk",
  })
  @post("{id}")
  static createBbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
