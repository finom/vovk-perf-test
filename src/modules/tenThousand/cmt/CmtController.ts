import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmt")
export default class CmtController {
  @operation({
    summary: "Get Cmt",
  })
  @get()
  static getCmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmt",
  })
  @post("{id}")
  static createCmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
