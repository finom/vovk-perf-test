import { procedure, prefix, get, post, operation } from "vovk";

@prefix("op")
export default class OpController {
  @operation({
    summary: "Get Op",
  })
  @get()
  static getOp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Op",
  })
  @post("{id}")
  static createOp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
