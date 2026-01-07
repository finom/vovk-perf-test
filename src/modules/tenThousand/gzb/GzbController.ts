import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzb")
export default class GzbController {
  @operation({
    summary: "Get Gzb",
  })
  @get()
  static getGzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzb",
  })
  @post("{id}")
  static createGzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
