import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzd")
export default class GzdController {
  @operation({
    summary: "Get Gzd",
  })
  @get()
  static getGzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzd",
  })
  @post("{id}")
  static createGzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
