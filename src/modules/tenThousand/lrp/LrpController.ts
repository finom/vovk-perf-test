import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrp")
export default class LrpController {
  @operation({
    summary: "Get Lrp",
  })
  @get()
  static getLrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrp",
  })
  @post("{id}")
  static createLrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
