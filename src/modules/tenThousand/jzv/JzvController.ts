import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzv")
export default class JzvController {
  @operation({
    summary: "Get Jzv",
  })
  @get()
  static getJzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzv",
  })
  @post("{id}")
  static createJzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
