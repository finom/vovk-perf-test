import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccv")
export default class CcvController {
  @operation({
    summary: "Get Ccv",
  })
  @get()
  static getCcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccv",
  })
  @post("{id}")
  static createCcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
