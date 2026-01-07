import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzj")
export default class GzjController {
  @operation({
    summary: "Get Gzj",
  })
  @get()
  static getGzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzj",
  })
  @post("{id}")
  static createGzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
