import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvv")
export default class GvvController {
  @operation({
    summary: "Get Gvv",
  })
  @get()
  static getGvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvv",
  })
  @post("{id}")
  static createGvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
