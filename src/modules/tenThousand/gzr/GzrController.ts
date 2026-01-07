import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzr")
export default class GzrController {
  @operation({
    summary: "Get Gzr",
  })
  @get()
  static getGzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzr",
  })
  @post("{id}")
  static createGzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
