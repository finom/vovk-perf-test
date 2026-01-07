import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzk")
export default class HzkController {
  @operation({
    summary: "Get Hzk",
  })
  @get()
  static getHzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzk",
  })
  @post("{id}")
  static createHzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
