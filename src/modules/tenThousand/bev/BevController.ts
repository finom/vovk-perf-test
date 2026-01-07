import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bev")
export default class BevController {
  @operation({
    summary: "Get Bev",
  })
  @get()
  static getBev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bev",
  })
  @post("{id}")
  static createBev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
