import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzn")
export default class GznController {
  @operation({
    summary: "Get Gzn",
  })
  @get()
  static getGzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzn",
  })
  @post("{id}")
  static createGzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
