import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzq")
export default class GzqController {
  @operation({
    summary: "Get Gzq",
  })
  @get()
  static getGzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzq",
  })
  @post("{id}")
  static createGzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
