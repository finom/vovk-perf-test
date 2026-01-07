import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxx")
export default class LxxController {
  @operation({
    summary: "Get Lxx",
  })
  @get()
  static getLxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxx",
  })
  @post("{id}")
  static createLxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
