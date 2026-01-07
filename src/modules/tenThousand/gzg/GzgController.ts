import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzg")
export default class GzgController {
  @operation({
    summary: "Get Gzg",
  })
  @get()
  static getGzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzg",
  })
  @post("{id}")
  static createGzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
