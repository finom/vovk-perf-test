import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blk")
export default class BlkController {
  @operation({
    summary: "Get Blk",
  })
  @get()
  static getBlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blk",
  })
  @post("{id}")
  static createBlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
