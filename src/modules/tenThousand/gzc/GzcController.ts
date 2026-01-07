import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzc")
export default class GzcController {
  @operation({
    summary: "Get Gzc",
  })
  @get()
  static getGzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzc",
  })
  @post("{id}")
  static createGzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
