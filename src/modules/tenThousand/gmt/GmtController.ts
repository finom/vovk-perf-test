import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmt")
export default class GmtController {
  @operation({
    summary: "Get Gmt",
  })
  @get()
  static getGmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmt",
  })
  @post("{id}")
  static createGmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
