import { procedure, prefix, get, post, operation } from "vovk";

@prefix("now")
export default class NowController {
  @operation({
    summary: "Get Now",
  })
  @get()
  static getNow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Now",
  })
  @post("{id}")
  static createNow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
