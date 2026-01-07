import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gv")
export default class GvController {
  @operation({
    summary: "Get Gv",
  })
  @get()
  static getGv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gv",
  })
  @post("{id}")
  static createGv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
