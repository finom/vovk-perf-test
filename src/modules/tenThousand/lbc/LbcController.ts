import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbc")
export default class LbcController {
  @operation({
    summary: "Get Lbc",
  })
  @get()
  static getLbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbc",
  })
  @post("{id}")
  static createLbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
