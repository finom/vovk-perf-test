import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtx")
export default class GtxController {
  @operation({
    summary: "Get Gtx",
  })
  @get()
  static getGtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtx",
  })
  @post("{id}")
  static createGtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
