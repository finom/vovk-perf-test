import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvr")
export default class GvrController {
  @operation({
    summary: "Get Gvr",
  })
  @get()
  static getGvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvr",
  })
  @post("{id}")
  static createGvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
