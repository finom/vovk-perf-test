import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrm")
export default class LrmController {
  @operation({
    summary: "Get Lrm",
  })
  @get()
  static getLrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrm",
  })
  @post("{id}")
  static createLrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
