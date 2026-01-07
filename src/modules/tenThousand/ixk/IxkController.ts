import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixk")
export default class IxkController {
  @operation({
    summary: "Get Ixk",
  })
  @get()
  static getIxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixk",
  })
  @post("{id}")
  static createIxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
