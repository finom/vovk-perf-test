import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvr")
export default class DvrController {
  @operation({
    summary: "Get Dvr",
  })
  @get()
  static getDvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvr",
  })
  @post("{id}")
  static createDvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
