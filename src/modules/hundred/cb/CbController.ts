import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cb")
export default class CbController {
  @operation({
    summary: "Get Cb",
  })
  @get()
  static getCb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cb",
  })
  @post("{id}")
  static createCb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
