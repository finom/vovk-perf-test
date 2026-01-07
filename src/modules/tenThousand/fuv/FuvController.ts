import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuv")
export default class FuvController {
  @operation({
    summary: "Get Fuv",
  })
  @get()
  static getFuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuv",
  })
  @post("{id}")
  static createFuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
