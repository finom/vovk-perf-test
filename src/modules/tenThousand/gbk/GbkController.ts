import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbk")
export default class GbkController {
  @operation({
    summary: "Get Gbk",
  })
  @get()
  static getGbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbk",
  })
  @post("{id}")
  static createGbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
