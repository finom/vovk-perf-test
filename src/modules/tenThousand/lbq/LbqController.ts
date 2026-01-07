import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbq")
export default class LbqController {
  @operation({
    summary: "Get Lbq",
  })
  @get()
  static getLbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbq",
  })
  @post("{id}")
  static createLbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
