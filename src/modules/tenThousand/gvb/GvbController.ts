import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvb")
export default class GvbController {
  @operation({
    summary: "Get Gvb",
  })
  @get()
  static getGvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvb",
  })
  @post("{id}")
  static createGvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
