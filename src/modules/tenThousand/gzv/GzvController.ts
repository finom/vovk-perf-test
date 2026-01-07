import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzv")
export default class GzvController {
  @operation({
    summary: "Get Gzv",
  })
  @get()
  static getGzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzv",
  })
  @post("{id}")
  static createGzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
