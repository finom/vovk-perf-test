import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcv")
export default class FcvController {
  @operation({
    summary: "Get Fcv",
  })
  @get()
  static getFcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcv",
  })
  @post("{id}")
  static createFcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
