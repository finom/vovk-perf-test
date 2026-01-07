import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lst")
export default class LstController {
  @operation({
    summary: "Get Lst",
  })
  @get()
  static getLst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lst",
  })
  @post("{id}")
  static createLst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
