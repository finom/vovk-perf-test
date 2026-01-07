import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbz")
export default class LbzController {
  @operation({
    summary: "Get Lbz",
  })
  @get()
  static getLbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbz",
  })
  @post("{id}")
  static createLbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
