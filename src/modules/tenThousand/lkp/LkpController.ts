import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkp")
export default class LkpController {
  @operation({
    summary: "Get Lkp",
  })
  @get()
  static getLkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkp",
  })
  @post("{id}")
  static createLkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
