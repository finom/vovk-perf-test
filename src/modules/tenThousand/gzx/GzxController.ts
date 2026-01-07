import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzx")
export default class GzxController {
  @operation({
    summary: "Get Gzx",
  })
  @get()
  static getGzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzx",
  })
  @post("{id}")
  static createGzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
