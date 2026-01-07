import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cid")
export default class CidController {
  @operation({
    summary: "Get Cid",
  })
  @get()
  static getCid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cid",
  })
  @post("{id}")
  static createCid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
