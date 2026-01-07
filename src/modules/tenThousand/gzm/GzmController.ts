import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzm")
export default class GzmController {
  @operation({
    summary: "Get Gzm",
  })
  @get()
  static getGzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzm",
  })
  @post("{id}")
  static createGzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
