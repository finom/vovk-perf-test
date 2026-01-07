import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxk")
export default class GxkController {
  @operation({
    summary: "Get Gxk",
  })
  @get()
  static getGxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxk",
  })
  @post("{id}")
  static createGxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
