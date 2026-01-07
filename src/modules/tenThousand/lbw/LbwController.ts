import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbw")
export default class LbwController {
  @operation({
    summary: "Get Lbw",
  })
  @get()
  static getLbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbw",
  })
  @post("{id}")
  static createLbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
