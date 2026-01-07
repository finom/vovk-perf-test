import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhq")
export default class LhqController {
  @operation({
    summary: "Get Lhq",
  })
  @get()
  static getLhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhq",
  })
  @post("{id}")
  static createLhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
