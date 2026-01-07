import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbw")
export default class CbwController {
  @operation({
    summary: "Get Cbw",
  })
  @get()
  static getCbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbw",
  })
  @post("{id}")
  static createCbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
