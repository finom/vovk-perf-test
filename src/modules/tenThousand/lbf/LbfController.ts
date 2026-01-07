import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbf")
export default class LbfController {
  @operation({
    summary: "Get Lbf",
  })
  @get()
  static getLbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbf",
  })
  @post("{id}")
  static createLbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
