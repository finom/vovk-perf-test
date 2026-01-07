import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbk")
export default class CbkController {
  @operation({
    summary: "Get Cbk",
  })
  @get()
  static getCbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbk",
  })
  @post("{id}")
  static createCbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
