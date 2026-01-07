import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbh")
export default class LbhController {
  @operation({
    summary: "Get Lbh",
  })
  @get()
  static getLbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbh",
  })
  @post("{id}")
  static createLbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
