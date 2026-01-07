import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbj")
export default class CbjController {
  @operation({
    summary: "Get Cbj",
  })
  @get()
  static getCbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbj",
  })
  @post("{id}")
  static createCbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
