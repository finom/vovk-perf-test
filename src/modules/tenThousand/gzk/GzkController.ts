import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzk")
export default class GzkController {
  @operation({
    summary: "Get Gzk",
  })
  @get()
  static getGzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzk",
  })
  @post("{id}")
  static createGzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
