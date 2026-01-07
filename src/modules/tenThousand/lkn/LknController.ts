import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkn")
export default class LknController {
  @operation({
    summary: "Get Lkn",
  })
  @get()
  static getLkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkn",
  })
  @post("{id}")
  static createLkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
