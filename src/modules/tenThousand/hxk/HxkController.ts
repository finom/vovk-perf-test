import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxk")
export default class HxkController {
  @operation({
    summary: "Get Hxk",
  })
  @get()
  static getHxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxk",
  })
  @post("{id}")
  static createHxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
