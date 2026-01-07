import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dir")
export default class DirController {
  @operation({
    summary: "Get Dir",
  })
  @get()
  static getDir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dir",
  })
  @post("{id}")
  static createDir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
