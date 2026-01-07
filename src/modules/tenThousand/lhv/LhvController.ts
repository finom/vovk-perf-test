import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhv")
export default class LhvController {
  @operation({
    summary: "Get Lhv",
  })
  @get()
  static getLhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhv",
  })
  @post("{id}")
  static createLhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
