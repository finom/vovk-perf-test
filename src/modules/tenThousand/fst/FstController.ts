import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fst")
export default class FstController {
  @operation({
    summary: "Get Fst",
  })
  @get()
  static getFst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fst",
  })
  @post("{id}")
  static createFst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
