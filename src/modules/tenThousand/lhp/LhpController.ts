import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhp")
export default class LhpController {
  @operation({
    summary: "Get Lhp",
  })
  @get()
  static getLhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhp",
  })
  @post("{id}")
  static createLhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
