import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvh")
export default class GvhController {
  @operation({
    summary: "Get Gvh",
  })
  @get()
  static getGvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvh",
  })
  @post("{id}")
  static createGvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
