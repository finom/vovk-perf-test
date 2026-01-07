import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzz")
export default class GzzController {
  @operation({
    summary: "Get Gzz",
  })
  @get()
  static getGzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzz",
  })
  @post("{id}")
  static createGzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
