import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmv")
export default class LmvController {
  @operation({
    summary: "Get Lmv",
  })
  @get()
  static getLmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmv",
  })
  @post("{id}")
  static createLmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
