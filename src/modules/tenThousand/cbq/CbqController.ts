import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbq")
export default class CbqController {
  @operation({
    summary: "Get Cbq",
  })
  @get()
  static getCbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbq",
  })
  @post("{id}")
  static createCbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
