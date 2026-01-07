import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chm")
export default class ChmController {
  @operation({
    summary: "Get Chm",
  })
  @get()
  static getChm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chm",
  })
  @post("{id}")
  static createChm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
