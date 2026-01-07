import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzh")
export default class GzhController {
  @operation({
    summary: "Get Gzh",
  })
  @get()
  static getGzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzh",
  })
  @post("{id}")
  static createGzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
