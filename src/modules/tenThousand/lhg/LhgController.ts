import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhg")
export default class LhgController {
  @operation({
    summary: "Get Lhg",
  })
  @get()
  static getLhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhg",
  })
  @post("{id}")
  static createLhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
