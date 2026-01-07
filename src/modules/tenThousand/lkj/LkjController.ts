import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkj")
export default class LkjController {
  @operation({
    summary: "Get Lkj",
  })
  @get()
  static getLkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkj",
  })
  @post("{id}")
  static createLkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
