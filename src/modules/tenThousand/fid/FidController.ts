import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fid")
export default class FidController {
  @operation({
    summary: "Get Fid",
  })
  @get()
  static getFid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fid",
  })
  @post("{id}")
  static createFid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
