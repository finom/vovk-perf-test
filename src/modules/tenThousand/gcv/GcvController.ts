import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcv")
export default class GcvController {
  @operation({
    summary: "Get Gcv",
  })
  @get()
  static getGcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcv",
  })
  @post("{id}")
  static createGcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
