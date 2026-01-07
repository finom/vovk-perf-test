import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmk")
export default class GmkController {
  @operation({
    summary: "Get Gmk",
  })
  @get()
  static getGmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmk",
  })
  @post("{id}")
  static createGmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
