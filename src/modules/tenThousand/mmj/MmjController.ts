import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmj")
export default class MmjController {
  @operation({
    summary: "Get Mmj",
  })
  @get()
  static getMmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmj",
  })
  @post("{id}")
  static createMmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
