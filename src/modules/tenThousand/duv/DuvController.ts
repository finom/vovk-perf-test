import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duv")
export default class DuvController {
  @operation({
    summary: "Get Duv",
  })
  @get()
  static getDuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duv",
  })
  @post("{id}")
  static createDuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
