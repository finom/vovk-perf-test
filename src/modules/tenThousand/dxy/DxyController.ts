import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxy")
export default class DxyController {
  @operation({
    summary: "Get Dxy",
  })
  @get()
  static getDxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxy",
  })
  @post("{id}")
  static createDxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
