import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzw")
export default class GzwController {
  @operation({
    summary: "Get Gzw",
  })
  @get()
  static getGzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzw",
  })
  @post("{id}")
  static createGzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
