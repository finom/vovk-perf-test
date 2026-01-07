import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cms")
export default class CmsController {
  @operation({
    summary: "Get Cms",
  })
  @get()
  static getCms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cms",
  })
  @post("{id}")
  static createCms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
