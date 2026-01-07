import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzf")
export default class GzfController {
  @operation({
    summary: "Get Gzf",
  })
  @get()
  static getGzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzf",
  })
  @post("{id}")
  static createGzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
