import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htx")
export default class HtxController {
  @operation({
    summary: "Get Htx",
  })
  @get()
  static getHtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htx",
  })
  @post("{id}")
  static createHtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
