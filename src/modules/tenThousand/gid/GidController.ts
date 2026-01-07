import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gid")
export default class GidController {
  @operation({
    summary: "Get Gid",
  })
  @get()
  static getGid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gid",
  })
  @post("{id}")
  static createGid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
