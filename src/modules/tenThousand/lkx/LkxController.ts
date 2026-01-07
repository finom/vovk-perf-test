import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkx")
export default class LkxController {
  @operation({
    summary: "Get Lkx",
  })
  @get()
  static getLkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkx",
  })
  @post("{id}")
  static createLkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
