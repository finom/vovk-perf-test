import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrw")
export default class LrwController {
  @operation({
    summary: "Get Lrw",
  })
  @get()
  static getLrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrw",
  })
  @post("{id}")
  static createLrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
