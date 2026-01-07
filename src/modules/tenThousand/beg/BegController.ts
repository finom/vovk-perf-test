import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beg")
export default class BegController {
  @operation({
    summary: "Get Beg",
  })
  @get()
  static getBeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beg",
  })
  @post("{id}")
  static createBeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
