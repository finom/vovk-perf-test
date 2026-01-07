import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvk")
export default class GvkController {
  @operation({
    summary: "Get Gvk",
  })
  @get()
  static getGvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvk",
  })
  @post("{id}")
  static createGvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
