import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzl")
export default class GzlController {
  @operation({
    summary: "Get Gzl",
  })
  @get()
  static getGzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzl",
  })
  @post("{id}")
  static createGzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
