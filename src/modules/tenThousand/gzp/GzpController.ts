import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzp")
export default class GzpController {
  @operation({
    summary: "Get Gzp",
  })
  @get()
  static getGzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzp",
  })
  @post("{id}")
  static createGzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
