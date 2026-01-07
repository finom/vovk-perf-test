import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxy")
export default class LxyController {
  @operation({
    summary: "Get Lxy",
  })
  @get()
  static getLxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxy",
  })
  @post("{id}")
  static createLxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
